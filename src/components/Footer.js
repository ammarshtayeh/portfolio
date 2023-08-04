import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
             
              <a href="https://www.linkedin.com/in/ammar-shtayeh-174259221/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100090212624236"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/ammar._shtayehh/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
