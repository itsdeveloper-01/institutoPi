
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

const phoneNumber = "5215512345678";
const emailAddress = "info@tuescuela.com";

export default function FloatingButtons() {
  return (
    <>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed z-50 right-5 bottom-24 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl w-14 h-14 flex items-center justify-center transition-transform duration-200 transform hover:scale-110 active:scale-95"
      >
        <FaWhatsapp size={28} />
      </a>
      <a
        href={`mailto:${emailAddress}`}
        className="fixed z-50 right-5 bottom-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl w-14 h-14 flex items-center justify-center transition-transform duration-200 transform hover:scale-110 active:scale-95"
      >
        <FaRegEnvelope size={28} />
      </a>
    </>
  );
}
