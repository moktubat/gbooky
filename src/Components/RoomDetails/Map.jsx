
const Map = () => {
    return (
        <div className="mt-4 bg-white px-4 py-3 rounded-lg">
            <h1 className="text-3xl font-bold">Where you will be</h1>
            <p>Nusa Ceningan, Bali, <br /> Indonesia</p>

            <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010296.3992298499!2d114.41202107705911!3d-8.453560156567516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sbd!4v1711184388527!5m2!1sen!2sbd"
              className="w-full h-[95vh] border-0 rounded-lg md:rounded-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
    );
};

export default Map;