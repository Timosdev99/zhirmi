
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div
        className="absolute top-0 -left-20 w-96 h-96 bg-lime-900 rounded-full blur-3xl"
      ></div>

      <div
        className="absolute bottom-0 right-20 w-96 h-96 bg-lime-900 rounded-full blur-3xl"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-lime-400">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            We&apos;re here to help. Reach out to us for any inquiries or support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-lime-400 mb-4">Get in Touch</h2>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">zhirmitech@gmail.com</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400">+234 704 363 5009</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-400">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-transparent backdrop-blur-2xl p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-lime-400 mb-6">Send a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="flex-1 bg-transparent border border-gray-700 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-lime-400 transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"

                    className="flex-1  bg-transparent border border-gray-700 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-lime-400 transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full px-4 py-3 rounded-md bg-transparent border border-gray-700 text-white focus:outline-none focus:border-lime-400 transition "
                    defaultValue={''}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
