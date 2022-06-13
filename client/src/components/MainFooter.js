import React from "react";
import { Link } from "react-router-dom";
import "./css/footer.css";

export default function MainFooter() {
  return (
    <div className="justify-content-center text-center" id="footer">
      <h6>
        Feel free to reach out to me by submitting the <Link to="/contact">contact me</Link> form.
      </h6>

      <a href="#top">Back to top</a>
    </div>
  );
}
