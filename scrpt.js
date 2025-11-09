function scrollToServices() {
    document.getElementById('servicios').scrollIntoView({
        behavior: 'smooth'
    });
}

// Requirements data for each service
const serviceRequirements = {
    "Conversión a UTM": [
        "Dictada la sentencia judicial en causa de alimentos",
    ],
    "Retención al empleador": [
        "Debe realizar la solicitud número 3",
        "Datos del empleador o institución pagadora(NOMBRE,RUT Y DIRECCIÓN)",
    ],
    "Información de la Entidad que debe Retener": [
    ],
    "Pago de Pensión como Usufructo, Uso o Habitación": [
        "Certificado de Dominio Vigente",
    ],
    "Solicitud de Prenda o Hipoteca": [
        "Certificado de Dominio Vigente",
],
    "Solicitud de Prenda o Hipoteca del Alimentante que Sale del País": [
        "Prueba de salida del país",
        "Bienes del alimentante",
    ],
    "Solicitud de Multa a Beneficio Fiscal": [
        "",
        "Datos del Empleador infractor"
    ],
    "Solicitud de Orden de Arresto y Tramitación": [
        "No pago de pensión alimenticia por 3 períodos"
    ],
    "Solicitud para que la TGR haga Retención de Impuestos Anual": [
        "Deudor de Pensión alimenticia"
    ],
    "Solicitud de Retención Bancaria": [
        "Deudor de Pensión alimenticia",
        "Información de las cuentas Bancarias"
    ],
    "Suspensión de la Licencia de Conducir": [
        "Deudor de Pensión alimenticia"
    ],
    "Solicitud de Pago Solidario de Terceros": [
        "Tercero que imposibilitare el pago de la pensión"
    ],
    "Orden de Arresto a Terceros (que oculten al alimentante)": [
        "Tercero que oculta al alimentante para que no lo notifiquen o cumplan un apremio en su contra"
    ],
    "Acción de Reembolso en contra del Alimentante": [
        "Caso 1: Si se hizo cargo de la pensión cuando no era su obligación legal",
        "Caso 2: Si se hizo cargo de en exceso de lo que era su obligación"
    ],
    "Condonación de Deuda Alimenticia": [
        "Acuerdo de las partes"
    ],
    "Procedimiento Especial para el Cobro de Deuda de Pensión": [
        "Deuda de pensión por 3 períodos"
    ],
    "Procedimiento Extraordinario para el Cobro de Deuda de Pensión": [
        "Deuda de pensión por 3 períodos",
        "Haber iniciado y concluido el Procedimiento Especial (N° 16)"
    ],
    "Pago Solidario de la AFP": [
        "5 días habiles en los que el tribunal notifico a la AFP para que efectue el pago respectivo"
    ],
    "Inscripción en el Registro Nacional de Deudores": [
        "Deudor de pensión por 3 períodos"
    ],
    "Objeción a la Solicitud de Inscripción en el Registro Nacional de Deudores": [
        "Pago de pensión y no adedudar 3 períodos"
    ]
};

// Animación de entrada para las tarjetas
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
        }
    });
});

document.querySelectorAll('.service-card').forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);

    // Add click event to open modal
    card.addEventListener('click', () => {
        const service = card.getAttribute('data-service');
        document.getElementById('service').value = service;

        // Populate requirements
        const requirementsList = document.getElementById('requirements-list');
        requirementsList.innerHTML = '';
        if (serviceRequirements[service]) {
            serviceRequirements[service].forEach(req => {
                const li = document.createElement('li');
                li.textContent = req;
                requirementsList.appendChild(li);
            });
        }

        document.getElementById('requestModal').style.display = 'block';
    });
});

// Modal functionality
const modal = document.getElementById('requestModal');
const closeBtn = document.querySelector('.close');

// Close modal when clicking close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});







// WhatsApp button functionality
document.getElementById('whatsappBtn').addEventListener('click', () => {
    const phoneNumber = '+56946932740';
    const message = 'Hola, me gustaría obtener más información sobre sus servicios de gestión de causas de cumplimiento.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

// Form submission
document.getElementById('requestForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Here you would send the data to a server
    // For now, just show an alert
    alert('Solicitud enviada exitosamente. Nos pondremos en contacto pronto.');
    modal.style.display = 'none';
    // Reset form
    event.target.reset();
});