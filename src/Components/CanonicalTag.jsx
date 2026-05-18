import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

function CanonicalTag() {
  const location = useLocation();
  const baseUrl = "https://www.sairameducation.in";

  const path =
    location.pathname === "/" ? "" : location.pathname.replace(/\/$/, "");

  const canonicalUrl = baseUrl + path;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}

export default CanonicalTag;