const title = "Electrouribe";
const email = "jairour.09@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los servicios de reparación de ${title} y me gustaría recibir más información. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3153455133";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Electrouribe es tu solución confiable para el arreglo de electrodomésticos. Desde nuestra fundación, nos hemos especializado en devolverle la vida a tus\n" +
            "aparatos, asegurando que funcionen como nuevos.\n" +
            "En Electrouribe, comprendemos la importancia de mantener tus electrodomésticos en perfecto estado. Nuestro equipo de expertos está capacitado para\n" +
            "diagnosticar y reparar una amplia gama de problemas, utilizando las herramientas y técnicas más avanzadas.\n" +
            "Además de ofrecer servicios de reparación, en Electrouribe nos enfocamos en brindar un servicio al cliente excepcional. Nos esforzamos por realizar cada reparación de manera rápida y eficiente, para que puedas volver a disfrutar de la funcionalidad de tus aparatos en el menor tiempo posible.\n" +
            "Confía en Electrouribe para todos tus arreglos de electrodomésticos. ¡Somos los expertos que necesitas para que todo funcione como nuevo!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Electrouribe",
            p2: "Somos los expertos que necesitas para que todo funcione como nuevo.",
        },
        address: "Dirección del emprendimiento",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565635710639&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
