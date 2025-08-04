"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      <form action="">
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name*"
              className="font-light"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">message</p>
            </div>
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="joshnd@example.com*"
              className="font-light"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">message</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <Input
              type="text"
              name="subject"
              placeholder="Subject*"
              className="font-light"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">message</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <Textarea
              name="message"
              rows={5}
              placeholder="Your Message*"
              className="font-light"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">message</p>
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-6 w-full">
          Send Message
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
