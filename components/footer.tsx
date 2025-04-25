import { Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-16 mb-8 text-center">
      <p className="text-sm">
        Elaborado por{" "}
        <a
          href="https://linkedin.com/in/calirenato82"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
          id="footer-linkedin-link"
        >
          Cali (Renato Caliari)
        </a>{" "}
        com <span role="img" aria-label="black heart">🖤</span>
      </p>
    </footer>
  )
}
