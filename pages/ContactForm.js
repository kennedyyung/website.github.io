import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'


const ContactForm = () => {
  const form = useRef();
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a3tj6t4', 'template_651pgju', form.current, {
        publicKey: 'ybw-MdbAn3iyFWH9G',
      })
      .then(

        (result) => {
                      setStateMessage('Message sent! I&apos;ll get back to you as soon as I can :)');
                      setTimeout(() => {
                        setStateMessage(null);
                      }, 5000); // hide message after 5 seconds
                    },
                    (error) => {
                      setStateMessage('Something went wrong, please try again later');
                      setTimeout(() => {
                        setStateMessage(null);
                      }, 5000); // hide message after 5 seconds
                    }
      );
      e.target.reset();
  };


  return (
      <div className="bg-button">
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-flow-row">
        <label>Name</label>
        <input type="text" name="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />

        <label>Email</label>

        <input type="text" name="user_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
        <label>Message</label>

        <textarea name="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here"></textarea>

        <button type="submit" value="Send"  class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dark</button>
        {stateMessage && <p>{stateMessage}</p>}
        </div>
      </form>
      </div>
  );

};

export default ContactForm

// const ContactForm = () => {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [stateMessage, setStateMessage] = useState(null);
//     const sendEmail = (e) => {
//       e.persist();
//       e.preventDefault();
//       setIsSubmitting(true);
//       emailjs
//         .sendForm(
//           process.env.service_a3tj6t4,
//           process.env.template_651pgju,
//           e.target,
//           process.env.qDNvurHjfyeQWY_L46G8G
//         )
//         .then(
//           (result) => {
//             setStateMessage('Message sent!');
//             setIsSubmitting(false);
//             setTimeout(() => {
//               setStateMessage(null);
//             }, 5000); // hide message after 5 seconds
//           },
//           (error) => {
//             setStateMessage('Something went wrong, please try again later');
//             setIsSubmitting(false);
//             setTimeout(() => {
//               setStateMessage(null);
//             }, 5000); // hide message after 5 seconds
//           }
//         );
      
//       // Clears the form after sending the email
//       e.target.reset();
//     };
//     return (
//       <div className="bg-button">
//       <form onSubmit={sendEmail}>
//         <div className="grid grid-flow-row">
//         <label>Name</label>
//         <input type="text" id="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
//         {/* <input type="text" name="user_name" /> */}
//         <label>Email</label>
//         {/* <input type="email" name="user_email" /> */}
//         <input type="text" id="user_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
//         <label>Message</label>
//         {/* <textarea name="message" /> */}
//         <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here"></textarea>
//         {/* <input type="submit" value="Send" disabled={isSubmitting} /> */}
//         <button type="submit" value="Send" disabled={isSubmitting} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
//         {stateMessage && <p>{stateMessage}</p>}
//         </div>
//       </form>
//       </div>
//     );
//   };
//   export default ContactForm;