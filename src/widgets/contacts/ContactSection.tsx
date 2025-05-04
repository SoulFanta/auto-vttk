import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactsSection() {
  return (
      <div className="flex flex-col sm:items-stretch  sm:flex-row justify-center gap-10 ">
        <ContactInfo />
        <ContactForm />
      </div>
  );
}