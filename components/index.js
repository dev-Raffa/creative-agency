import { MediumBall } from "./balls/medium/index.js";
import { PrimaryButton } from "./buttons/primary/index.js"
import { SecondaryButton } from "./buttons/secondary/index.js";
import { Card } from "./cards/index.js";
import { LogoFooter } from "./logos/footer/index.js";
import { LogoHeader } from "./logos/header/index.js";
import { MiniBalls } from "./miniballs/index.js";
import { OffCanvas } from "./offcanvas/index.js";
import { Portrait } from "./portrait/index.js";
import { Testimonial } from "./testimonials/index.js";

customElements.define('logo-header', LogoHeader)
customElements.define('logo-footer', LogoFooter)
customElements.define('primary-button', PrimaryButton)
customElements.define('secondary-button', SecondaryButton)
customElements.define('custom-card', Card)
customElements.define('custom-figure', Portrait)
customElements.define('card-testimonials', Testimonial)
customElements.define('custom-menu', OffCanvas)
customElements.define('mini-balls', MiniBalls)
customElements.define('medium-ball', MediumBall)