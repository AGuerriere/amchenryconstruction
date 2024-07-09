

export default function Contacts() {
  return (
    <>
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h6 className="mb-5">Contact us</h6>
            <ul>
              <li className="mb-3">
                Ready to start building your dream home?
              </li>
              <li className="mb-3">
                Get in touch with us today to discuss your project.
              </li>
              <li className="mb-3">
                Call <span className="text-teal-600">Shane</span> at <span className="text-teal-600">07894 401453</span><br />
                or call <span className="text-teal-600">Mark</span> at <span className="text-teal-600">07894 401453</span>
              </li>
              <li>Alternatively send us an email at <span className="text-teal-600"><a href="mailto:info@amchenryconstruction.com">info@amchenryconstruction.com</a></span> .</li><br />
              <li className="mb-3">
                Our office: <br />
                6 Dunamallaght Crescent,<br />
                Ballycastle<br />
                BT54 6PP<br />
                APPOINTMENTS ONLY
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <iframe
              className="w-full h-full min-h-[300px] border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2277.1920094619345!2d-6.239991522618915!3d55.19740187288378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861d3e0481c799d%3A0xaf3939874646fa50!2sA%20McHenry%20Construction!5e0!3m2!1sen!2sit!4v1720470747907!5m2!1sen!2sit"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}