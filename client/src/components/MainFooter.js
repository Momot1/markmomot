import React from "react";
import { Link } from "react-router-dom";

export default function MainFooter() {
  return (
    <div className="justify-content-center text-center">
      <h6>
        Feel free to reach out to me by submitting the{" "}
        <Link to="/contact">contact me</Link> form.
      </h6>

      <a href="#top">Back to top</a>
    </div>
  );
}
