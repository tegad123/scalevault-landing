"use client";

import { Navbar, Footer } from "@/components";

const privacyPolicyHTML = `
<style>
  [data-custom-class='body'], [data-custom-class='body'] * {
    background: transparent !important;
  }
  [data-custom-class='title'], [data-custom-class='title'] * {
    font-family: Arial !important;
    font-size: 26px !important;
    color: #000000 !important;
  }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
    font-family: Arial !important;
    color: #595959 !important;
    font-size: 14px !important;
  }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
    font-family: Arial !important;
    font-size: 19px !important;
    color: #000000 !important;
  }
  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
    font-family: Arial !important;
    font-size: 17px !important;
    color: #000000 !important;
  }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * {
    color: #595959 !important;
    font-size: 14px !important;
    font-family: Arial !important;
  }
  [data-custom-class='link'], [data-custom-class='link'] * {
    color: #3030F1 !important;
    font-size: 14px !important;
    font-family: Arial !important;
    word-break: break-word !important;
  }
</style>

<div data-custom-class="body">
  <div>
    <strong><span style="font-size: 26px;"><span data-custom-class="title"><h1>PRIVACY POLICY</h1></span></span></strong>
  </div>
  <div>
    <span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated January 14, 2026</span></span></strong></span>
  </div>
  <div><br></div>
  <div><br></div>
  <div><br></div>
  <div style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">This Privacy Notice for Scale Vault AI LLC ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</span></span></span>
  </div>
  <ul>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Visit our website at <span style="color: rgb(0, 58, 250);"><a target="_blank" data-custom-class="link" href="http://scalevault.ai/">http://scalevault.ai/</a></span> or any website of ours that links to this Privacy Notice</span></span></span></li>
  </ul>
  <ul>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Engage with us in other related ways, including any marketing or events</span></span></span></li>
  </ul>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><strong>Questions or concerns? </strong>Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a target="_blank" data-custom-class="link" href="mailto:tega@scalevault.ai">tega@scalevault.ai</a>.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <strong><span style="font-size: 15px;"><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></span></strong>
  </div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span data-custom-class="body_text"><strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</em></strong></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we process any sensitive personal information? </strong>We do not process sensitive personal information.</span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;"><br></div>

  <div id="toc" style="line-height: 1.5;">
    <span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>TABLE OF CONTENTS</h2></span></strong></span></span></span>
  </div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">1. WHAT INFORMATION DO WE COLLECT?</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">2. HOW DO WE PROCESS YOUR INFORMATION?</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">8. DO WE COLLECT INFORMATION FROM MINORS?</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">9. WHAT ARE YOUR PRIVACY RIGHTS?</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">10. CONTROLS FOR DO-NOT-TRACK FEATURES</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></span></div>
  <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">12. DO WE MAKE UPDATES TO THIS NOTICE?</span></span></div>
  <div style="line-height: 1.5;"><span style="color: rgb(0, 58, 250); font-size: 15px;">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></div>
  <div style="line-height: 1.5;"><span style="color: rgb(0, 58, 250);">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;"><br></div>

  <div id="infocollect" style="line-height: 1.5;">
    <span style="color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0); font-size: 15px;"><span style="font-size: 15px; color: rgb(0, 0, 0);"><span style="font-size: 15px; color: rgb(0, 0, 0);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>1. WHAT INFORMATION DO WE COLLECT?</h2></span></strong></span></span></span></span></span>
    <span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong><h3>Personal information you disclose to us</h3></strong></span></span>
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em> </em></strong><em>We collect personal information that you provide to us.</em></span></span></span></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</span></span></span>
  </div>
  <ul>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">names</span></span></span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">phone numbers</span></span></span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">email addresses</span></span></span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">job titles</span></span></span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">usernames</span></span></span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">passwords</span></span></span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">contact or authentication data</span></span></span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">billing addresses</span></span></span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">debit/credit card numbers</span></span></span></span></span></li>
  </ul>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Sensitive Information.</strong> We do not process sensitive information.</span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Social Media Login Data. </strong>We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></span>
  </div>
  <div style="line-height: 1.5;">
    <span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong><h3>Information automatically collected</h3></strong></span></span>
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em> </em></strong><em>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></span></span></span></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">The information we collect includes:</span></span></span>
  </div>
  <ul>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files.</span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services.</span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise.</span></span></span></li>
  </ul>
  <div style="line-height: 1.5;"><br></div>

  <div id="infouse" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2></span></strong></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></span></span></span></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></span></span></span>
  </div>
  <ul>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</span></span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</span></span></li>
  </ul>
  <div style="line-height: 1.5;"><br></div>

  <div id="legalbases" style="line-height: 1.5;">
    <strong><span style="font-size: 15px;"><span data-custom-class="heading_1"><h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2></span></span></strong>
    <em><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>In Short: </strong>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</span></span></em>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <em><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><u>If you are located in the EU or UK, this section applies to you.</u></strong></span></span></em>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span data-custom-class="body_text">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</span></span>
  </div>
  <ul>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Consent. </strong>We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</span></span></li>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</span></span></li>
  </ul>
  <div style="line-height: 1.5;"><br></div>

  <div id="whoshare" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may share information in specific situations described in this section and/or with the following third parties.</em></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px;"><span data-custom-class="body_text">We may need to share your personal information in the following situations:</span></span>
  </div>
  <ul>
    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></span></li>
  </ul>
  <div style="line-height: 1.5;"><br></div>

  <div id="sociallogins" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</em></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>

  <div id="inforetain" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>

  <div id="infosafe" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We aim to protect your personal information through a system of organizational and technical security measures.</em></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>

  <div id="infominors" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>8. DO WE COLLECT INFORMATION FROM MINORS?</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.</em></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at <a target="_blank" data-custom-class="link" href="mailto:tega@scalevault.ai">tega@scalevault.ai</a>.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>

  <div id="privacyrights" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will consider and act upon any request in accordance with applicable data protection laws.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you have questions or comments about your privacy rights, you may email us at <a target="_blank" data-custom-class="link" href="mailto:tega@scalevault.ai">tega@scalevault.ai</a>.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>

  <div id="DNT" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>

  <div id="uslaws" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information.</em></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>

  <div id="policyupdates" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>12. DO WE MAKE UPDATES TO THIS NOTICE?</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>

  <div id="contact" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you have questions or comments about this notice, you may email us at <a target="_blank" data-custom-class="link" href="mailto:tega@scalevault.ai">tega@scalevault.ai</a> or contact us by post at:</span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>
  <div style="line-height: 1.5;">
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">Scale Vault AI LLC</span></span></span></span></span></span></span>
  </div>
  <div style="line-height: 1.5;"><br></div>

  <div id="request" style="line-height: 1.5;">
    <span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2></span></strong></span></span></span></span></span>
    <span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</span></span></span>
  </div>
</div>

<style>
  ul {
    list-style-type: square;
  }
  ul > li > ul {
    list-style-type: circle;
  }
  ul > li > ul > li > ul {
    list-style-type: square;
  }
  ol li {
    font-family: Arial;
  }
</style>
`;

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <div 
            className="privacy-policy-content"
            dangerouslySetInnerHTML={{ __html: privacyPolicyHTML }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

