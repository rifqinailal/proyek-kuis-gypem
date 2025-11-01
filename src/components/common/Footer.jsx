
import { Link } from 'react-router-dom';

function Footer() {
  return (
   <footer className="flex flex-row justify-between footer bg-neutral p-4 relative z-20">

  <div>
    <img src="data:image/png;base64,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" alt="Logo"></img>
  </div>

  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>
  );
}

export default Footer;