import { Metadata } from "next"
import HeaderSection from "@/components/HeaderSection"
import {
  IoMailOutline,
  IoCallOutline,
  IoLocateOutline
} from "react-icons/io5"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact"
}

const ContactPage = () => {
  return (
    <div>
      <HeaderSection title="Contact Us" subtitle="Lorem ipsum dolor sit amet." />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-lg text-gray-500 mb-3">Contact Us</h1>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">Get In Touch Today</h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nesciunt ad quisquam ratione ab quae.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex items-start gap-4">
                <div className="bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoMailOutline className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email:</h4>
                  <p>email-us@example.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoCallOutline className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone Number:</h4>
                  <p>+62 812 3456 7890</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoLocateOutline className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Address:</h4>
                  <p>Jl. Mawar No. 123, Jakarta, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contoact Form */}
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
