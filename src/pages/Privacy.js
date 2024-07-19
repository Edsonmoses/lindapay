import React, { useState } from 'react'

const Privacy = () => {
    const[toggle, setToggle] = useState(1)
    function updateToggle(id){
        setToggle(id)
    }
  return (
    <>
    <section className="banner-primary" style={{ paddingTop: '10em' }}>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="c-white text-center">Terms and Policy</h1>
                <div className="row">

                </div>
            </div>
        </div>
    </div>
</section>
<section className="policy-section">
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="tabs">
                    <button className={toggle === 1 ? "tab-link active" : "tab-link" } onclick={()=>updateToggle(1)}>Dispute Resolution</button>
                    <button className={toggle === 2 ? "tab-link active" : "tab-link" } onclick={()=>updateToggle(2)}>Privacy Policy</button>
                    <button className={toggle === 3 ? "tab-link active" : "tab-link" } onclick={()=>updateToggle(3)}>Terms of Use</button>
                </div>
            </div>

            <div className="col-md-9">
                <div className={toggle === 1 ? "tab-content active" : "tab-content" } id='Dispute'>
                    <h3>Dispute Resolution</h3>
                    <p>We understand that disputes can sometimes arise 
during online transactions. At LindaPay, we've designed a clear and 
straightforward process to address and resolve these issues, ensuring 
fairness for all parties involved.</p>

                    <ol>
                        <li><strong>Dispute Initiation:</strong> If any 
party involved in a transaction raises a dispute before the payout, the 
transaction and funds are temporarily placed on hold until the dispute 
is resolved.</li>
                        <li><strong>Resolution Center:</strong> Both parties proceed to our Resolution Center, where they can engage in a discussion using our chat feature.</li>
                        <li><strong>Evidence Submission:</strong> During
 the resolution process, both parties are encouraged to provide evidence
 supporting their case, which should align with the listed item and the 
terms of the sale.</li>
                        <li><strong>Arbiter's Verdict (Level 1):</strong>
 Our arbiter reviews the evidence presented and issues a verdict. 
Verdict options are either to credit the merchant or refund the paying 
customer.</li>
                        <li><strong>Funds Disbursement:</strong> Once a 
verdict is reached based on the evidence, funds are disbursed 
accordingly to the wallet of the prevailing party. Withdrawal to a 
regular account can then be initiated.</li>
                        <li><strong>Resolution and Completion:</strong> With the dispute resolved, the transaction is marked as completed, and both parties can move forward.</li>
                    </ol>
                    <p>If a dispute remains unresolved after Level 1, 
either party involved may choose to escalate the dispute to Level 2. 
Contact our support team to initiate the arbitration process. (More 
information can be found in the 'dispute area' of your dashboard.)</p>
                    <p>Our aim is to ensure that our dispute resolution 
process offers a straightforward and transparent approach to address any
 complexities that may arise during transactions on our platform. Trust 
in LindaPay is our top priority, and we are here to facilitate 
resolutions that uphold the principles of fairness and transparency.</p>
                </div>

                <div className={toggle === 2 ? "tab-content active" : "tab-content" } id='Privacy'>
                    <h3>Privacy Policy</h3>
                    <p>The Internet is an amazing tool. It has the power
 to change the way we live, and we're starting to see that potential 
today. With only a few mouse-clicks, you can follow the news, look up 
facts, buy goods and services, and communicate with others from around 
the world. It's important to EWOSSY SERVICES LTD to help our customers 
retain their privacy when they take advantage of all the Internet has to
 offer. </p>
                    <p>We believe your business is no one else's. Your 
privacy is important to you and to us. So we'll protect the information 
you share with us. To protect your privacy, EWOSSY SERVICES LTD follows 
different principles in accordance with world-wide practices for 
customer privacy and data protection.</p>
                    <ul>
                        <li>We won't sell or give away your name, mail 
address, phone number, email address, credit card number or any other 
information to anyone. </li>
                        <li>We'll use state-of-the-art security measures to protect your information from unauthorized users. </li>
                    </ul>

                    <h6 className="heading-alt">NOTICE</h6>
                    <p>We will ask you when we need information that 
personally identifies you (personal information) or allows us to contact
 you. Generally this information is requested when you create a 
Registration ID here on LindaPay.net or when you download free software,
 enter a contest, order e-mail newsletters or join a limited-access 
premium site. We use your Personal Information for four primary 
purposes:</p>

                    <ul>
                        <li>To make the site easier for you to use by not having to enter information more than once. </li>
                        <li>To help you quickly access services or information. </li>
                        <li>To help us create content most relevant to you. </li>
                        <li>To alert you to product upgrades, special offers, updated information and other new services from EWOSSY SERVICES LTD. </li>
                    </ul>

                    <h6 className="heading-alt">CONSENT</h6>
                    <p>If you choose not to register or provide personal
 information, you can still use most of LindaPay.net, but you will not 
be able to access areas that require registration. </p>
                    <p>If you decide to register, you will be able to 
select the kinds of information you want to receive from us by 
subscribing to various services, like our electronic newsletters. If you
 do not want us to communicate with you about other offers regarding 
EWOSSY SERVICES LTD products, programs, events, or services by e-mail, 
postal mail, or telephone, you may select the option stating that you do
 not wish to receive marketing messages from EWOSSY SERVICES LTD. </p>
                    <p>EWOSSY SERVICES LTD occasionally allows other 
companies to offer our registered customers information about their 
products and services, using postal mail only. If you do not want to 
receive these offers, you may select the option stating that you do not 
wish to receive marketing materials from third parties. </p>

                    <h6 className="heading-alt">ACCESS</h6>
                    <p>We will provide you with the means to ensure that
 your personal information is correct and current. You may review and 
update this information at any time from your user profile page. There, 
you can:</p>
                    <ul>
                        <li>View and edit personal information you have already given us. </li>
                        <li>Tell us whether you want us to send you 
marketing information, or whether you want third parties to send you 
their offers by postal mail. </li>
                        <li>Sign up for electronic newsletters about our services and products. </li>
                        <li>Register. Once you register, you won't need to do it again. Wherever you go on LindaPay.net, your information stays with you. </li>
                    </ul>

                    <h6 className="heading-alt">SECURITY</h6>
                    <p>EWOSSY SERVICES LTD has taken strong measures to 
protect the security of your personal information and to ensure that 
your choices for its intended use are honored. We take strong 
precautions to protect your data from loss, misuse, unauthorized access 
or disclosure, alteration, or destruction. </p>
                    <p>We guarantee your e-commerce transactions to be 
100% safe and secure. When you place orders or access your personal 
account information, you're utilizing a secure server software SSL, 
which encrypts your personal information before it's sent over the 
Internet. SSL is one of the safest encryption technologies available.</p>
                    <p>In the event of unauthorized use of your credit 
card, you must notify your credit card provider in accordance with its 
reporting rules and procedures.</p>
                    <p>EWOSSY SERVICES LTD strictly protects the 
security of your personal information and honors your choices for its 
intended use. We carefully protect your data from loss, misuse, 
unauthorized access or disclosure, alteration, or destruction. </p>
                    <p>Your personal information is never shared outside
 the company without your permission, except under conditions explained 
above. Inside the company, data is stored in password-controlled servers
 with limited access. Your information may be stored and processed in 
the United Kingdown or any other country where EWOSSY SERVICES LTD, its 
subsidiaries, affiliates or agents are located.</p>
                    <p>You also have a significant role in protecting 
your information. No one can see or edit your personal information 
without knowing your user name and password, so do not share these with 
others.</p>

                    <h6 className="heading-alt">NOTICE TO PARENTS</h6>
                    <p>Parents or guardians: we want to help you guard 
your children's privacy. We encourage you to talk to your children about
 safe and responsible use of their Personal Information while using the 
Internet. </p>
                    <p>
                        The EWOSSY SERVICES LTD site does not publish content that is targeted to children.
                        </p><h6 className="heading-alt">ENFORCEMENT</h6>
                    <p>If for some reason you believe EWOSSY SERVICES 
LTD has not adhered to these principles, please notify us by e-mail at 
hello@LindaPay.net, and we will do our best to determine and correct the
 problem promptly. Be certain the words Privacy Policy are in the 
Subject line.</p>

                    <h6 className="heading-alt">CUSTOMER PROFILES</h6>
                    <p>As mentioned above, every registered customer has
 a unique personal profile. Each profile is assigned a unique personal 
identification number, which helps us ensure that only you can access 
your profile.</p>
                    <p>When you register, we create your profile, assign
 a personal identification number, then send this personal 
identification number back to your hard drive in the form of a cookie, 
which is a very small bit of code. This code is uniquely yours. It is 
your passport to seamless travel across LindaPay.net, allowing you to 
download free software, order free newsletters, and visit premium sites 
without having to fill out registration forms with information you've 
already provided. Even if you switch computers, you won't have to 
re-register – just use your Registration ID to identify yourself. </p>

                    <h6 className="heading-alt">WHAT WE DO WITH THE INFORMATION YOU SHARE</h6>
                    <p>When you join us, you provide us with your 
contact information, including your name and email address. We use this 
information to send you updates about your order, questionnaires to 
measure your satisfaction with our service and announcements about new 
and exciting services that we offer. When you order from us, we ask for 
your credit card number and billing address. We use this information 
only to bill you for the product(s) you order at that time. We do not 
save your billing information in case you want to order from us again, 
we also do not re-use this information without your permission.</p>
                    <p>We occasionally hire other companies to provide 
limited services on our behalf, including packaging, mailing and 
delivering purchases, answering customer questions about products or 
services, sending postal mail and processing event registration. We will
 only provide those companies the information they need to deliver the 
service, and they are prohibited from using that information for any 
other purpose.</p>
                    <p>EWOSSY SERVICES LTD will disclose your personal 
information, without notice, only if required to do so by law or in the 
good faith belief that such action is necessary to: (a) conform to the 
edicts of the law or comply with legal process served on EWOSSY SERVICES
 LTD or the site; (b) protect and defend the rights or property of 
EWOSSY SERVICES LTD and its family of Web sites, and, (c) act in urgent 
circumstances to protect the personal safety of users of EWOSSY SERVICES
 LTD, its Web sites, or the public.</p>

                </div>

                <div className={toggle === 3 ? "tab-content active" : "tab-content" } id='Terms'>
                    <h3>Terms &amp; Conditions</h3>
                    <p>These Terms of Use ("Terms of Use" or 
"Agreement") shall serve as an agreement that sets forth the terms and 
conditions which will govern your use and participation in the 
transaction management and escrow services provided on and through 
LindaPay (the "Services"). By selecting to utilize the Services you 
shall have also indicated your acceptance of these Terms of Use and your
 intent and agreement to be bound by them. If you are unwilling to agree
 to these Terms of Use, you shall discontinue further use of the 
Services. If you agree to these Terms of Use, you will be bound as 
follows:</p><br/>
<p>1.	<strong>Definitions</strong> – "Account" 
means (i) an account of a Buyer from which payment for the Transaction 
and related fees will be obtained, (ii) an account of a Seller to which 
payment for the Transaction and other payments will be credited. 
"Agreement" refers to this Agreement, the then current operating rules 
contained on the Site and the Transaction Escrow Instructions. 
"Transaction Details page" means those pages on the Site where Users 
provide all requested information in connection with a Transaction. 
"Escrow Instructions" or "General Instructions" means the document on 
the Site that contains the terms agreed upon on the Transaction Details 
page, as well as the other terms and conditions of the escrow 
transaction including these Terms of Use. “Buyer Inspection Period” 
means the specific period as agreed by the Parties within which the 
Buyer may inspect the items upon receipt, in the absence of an agreement
 between the parties; 5 days following the Seller’s notice of delivery. 
“LindaPay's notice” in the context of delivery, means LindaPay’s notice 
to the Seller to ship the items after the deposit of funds by the Buyer 
in its Account. “Seller Inspection Period” means the period within which
 the Seller must inspect items returned by the Buyer. It may be as 
agreed between the parties or as stated by the Seller’s return policy. 
However, the default period is 5 days following the days of Buyer’s 
notice of rejection, sent to LindaPay. "User" means Buyer(s) and 
Seller(s), participating in a Transaction. "Site" refers to the website 
for the Services which can be found at www.LindaPay.net . “Transaction 
Completion Code” means a number combination generated on the Site or by a
 plug in which indicates that the transaction was completed normally. 
Capitalized terms not defined herein shall have the same meaning as set 
forth in the General Instructions.<br/>
                    </p><p>2. <strong>Description of the Service</strong>
 - The Services are Internet-based transaction management and escrow 
services performed through LindaPay, which Services are intended to 
facilitate the completion of the underlying transaction under the terms 
of this Agreement, the Site and the applicable Transaction Escrow 
Instructions.</p>
                    <p>3. <strong>Limits on the Services</strong> - The 
Services are only available for lawful items and items not otherwise 
excluded by Section 4 below. Limitations on the Services may apply and 
can be found on the Site or in the General Instructions or Transaction 
Escrow Instructions. Only registered Users may use the Services. In 
order to register, you must supply all information required on the Site.
 Applicable state or federal laws and regulations may further limit the 
Services.</p>


                    <p>4. <strong>Prohibited Transactions</strong> - 
Users shall not utilize the Site or the Services in connection with any 
Transaction that is illegal or involves any illegal items, or is for any
 illegal purpose; involves any obscene material; involves any munitions 
or firearm; involves pirated software, DVD or videos or item(s) 
otherwise infringing copyrighted works; involves illegal drugs or 
controlled substances; involves real property or any interest in real 
property, the sale of a business (bulk sale), the transfer of title to a
 business entity, fund or joint control escrows, mobile homes or 
manufactured homes or the refinancing of either, reservation deposits of
 any kind, or promissory notes, mortgages or deeds of trust; or involves
 transactions directly or indirectly involving transactions which 
Nigerians are prohibited from engaging pursuant to sanctions and export 
controls administered by the Nigerian Customs Service’s ; or involves 
transactions directly involving persons (individuals or entities), as 
Users, who lack capacity to and/or are prohibited from entering 
contractual relations, such as minors or persons of unsound mind. In 
addition, LindaPay, in its sole discretion, may refuse to complete any 
Transaction that LindaPay has reason to believe is unauthorized or made 
by someone other than you, may violate any law, rule or regulation, or 
if LindaPay has reasonable cause not to honor it. Each User agrees to 
indemnify and hold LindaPay harmless for losses resulting from any use 
or attempted use of the Services in violation of this Agreement.</p>
                    <p>5. <strong>Rejection of Payment</strong> - Since 
the use of a bank account, credit card or debit card account, or the 
making of an electronic funds transfer may be limited by your agreement 
with your financial institution and/or by applicable law, LindaPay is 
not liable to any User if LindaPay does not complete a Transaction as a 
result of any such limit, or if a financial institution fails to honor 
any credit or debit to or from an Account. LindaPay may post rules 
related to payment on the Site and change such rules from time to time.</p>
                    <p>6. <strong>General Conditions of Use</strong> - 
If you arrive at the Site through entities linked and/or integrated with
 LindaPay or otherwise by or through a third party (e.g., an auction, 
exchange, or Internet-based intermediary that hosts electronic 
marketplaces and mediates transactions among businesses), then you 
authorize such third party to transfer relevant data to LindaPay to 
facilitate the Transaction. You represent and warrant that all 
information you provide to LindaPay or to such third party will be true,
 accurate and complete. The party entering into this Agreement on behalf
 of any User represents and warrants that he/she is authorized to do so 
and to bind the User and is a natural person of at least eighteen (18) 
years of age. In order to initiate and commence a Transaction, all Users
 to a Transaction must register at the Site, agree to all terms in the 
General Instructions and agree to the Transaction Escrow Instructions.
                    </p><p>
                        7. <strong>Obligations of Sellers</strong> - On 
the Transaction Details page, each Seller to a Transaction must 
designate an Account to which payment for the Transaction will be made. 
Each Seller authorizes LindaPay to initiate credit entries to such 
Seller's Account for payment of the purchase price, or applicable 
balance due, and to debit Seller's Account to discharge Seller's 
obligations. Each Seller in a Transaction shall deliver the items set 
forth in Transaction Details page directly to the Buyer (or Buyers), at 
the address specified by such Buyer as shown on the LindaPay website and
 on the terms and conditions set forth in the Transaction Escrow 
Instructions and General Instructions.

                        Upon the shipment of the items, Seller shall 
send LindaPay a notice of shipment. Upon delivery of the items set forth
 on the Transaction Details page Seller shall notify LindaPay if the 
delivery of the items (‘Notice of delivery’) and shall also provide 
LindaPay with the Transaction Completion Code which the Seller shall 
obtain from the  Buyer. In the event LindaPay does not receive the 
notice of delivery and/or the Transaction Completion Code from Seller 
within ten (10) calendar days of the purchase (where no shipping is 
required) or notification from LindaPay's notice to Seller to ship the 
items, Seller authorizes LindaPay to return the escrowed funds 
(excluding LindaPay fees) to Buyer except as otherwise agreed between 
the Parties or based on the Seller’s return policy as the case may be. 
In the event Seller accepts the returned items within the inspection 
period or fails to act within the inspection period, LindaPay shall 
remit the escrowed funds (excluding LindaPay fees) to Buyer. If Seller 
notifies LindaPay of its non-acceptance of any returned items within the
 Seller's inspection period, then LindaPay will retain the escrow funds 
pending resolution of the dispute or take other action as authorized. 
Notwithstanding anything to the contrary above, if all Users to a 
Transaction agree on the Transaction Details page that there is no 
shipping required, then no party hereto will have any obligation under 
this Agreement with respect to shipping.
                    </p>
                    <p>
                        8. <strong>Obligations of Buyers</strong> - On 
the Transaction Details page, Buyer must designate a payment mechanism 
and an Account from which the purchase price and related fees (unless 
such fees are to be paid by Seller) will be obtained for the deposit 
into escrow. Depending on the amount of the Transaction and the currency
 selected for the Transaction, Buyer may remit the necessary funds via 
various methods, which may include corporate credit card, charge card, 
debit card or purchasing card, cheque, cashier's cheque, or wire 
transfer. In the case of wire transfers, Buyer will initiate the wire to
 an account designated by LindaPay on or before the date set forth in 
the Transaction Details page. Regardless of the payment method, Buyer 
authorizes LindaPay and LindaPay authorized agents to initiate credit or
 debit transactions, as applicable, to obtain the purchase price and 
fees due for a Transaction and to initiate any debit or credit entries 
or reversals, as the case may be, as may be necessary to correct any 
error in a payment or transfer and to discharge Buyer's obligations 
under this Agreement. LindaPay will deposit funds received from Buyer 
into an escrow trust account maintained by LindaPay (the "Escrow 
Account"). Unless otherwise requested as specified in the following 
sentence, escrowed deposits do not earn interest for Buyer or Seller. If
 you anticipate an extended closing of the Transaction, then you may 
request and approve an instruction to have LindaPay place Buyer's funds 
into an interest bearing account for the benefit of Buyer or Seller. If 
interest is to accrue to the benefit of the Seller, then both Buyer and 
Seller must request and approve the establishment of the interest 
bearing account. If this request is made, then LindaPay will charge the 
account of the party to whom the interest accrues an additional 
nonrefundable service charge equivalent to 2% + ₦100 of the transaction 
value , which must be paid in advance. Upon receipt and acceptance of 
the items, Buyer shall deliver the Transaction Completion Code to the 
Seller. Upon rejection of the items, Buyer must notify LindaPay of its 
rejection of the items.  Upon receipt of the Transaction Completion Code
 indicating that the items have been received and accepted, LindaPay 
shall transfer the payment amount (less any amount payable to LindaPay 
for LindaPay fees) to Seller's Account. Subject to LindaPay’s Settlement
 Policy transfer to a Seller generally will be initiated within the next
 business day from the day on which notice of acceptance of the items is

                        received from the Buyer. If Buyer has not 
notified LindaPay of the non-receipt or rejection of the items during 
the Buyer's Inspection Period, then Buyer authorizes LindaPay to remit 
the escrowed funds (excluding LindaPay fees) to the Seller. Buyer shall 
follow the procedures set forth on the Site in the event the items are 
rejected.
                    </p>
                    <p>9. <strong>Our Responsibilities</strong> - 
LindaPay is obligated to perform only those duties expressly described 
in this Agreement and the General Instructions. LindaPay shall not be 
liable for any error in judgment, for any act taken or not taken, or for
 any mistake of fact or law, except for gross negligence or willful 
misconduct (subject to the limitations in Section 17 below). LindaPay 
may rely upon any notice, demand, request, letter, certificate, 
agreement or any other document which purports to have been transmitted 
or signed by or on behalf of a User indicated as the sender or signatory
 thereof and shall have no duty to make any inquiry or investigation. In
 the event that LindaPay is uncertain as to LindaPay duties or rights 
under this Agreement, receives any instruction, demand or notice from 
any User or financial institution which, in LindaPay's opinion, is in 
conflict with any of the provisions of this Agreement, or any dispute 
arises with respect to this Agreement or the Escrowed Funds, LindaPay 
may (i) consult with counsel of our choice (including our own attorneys)
 and any actions taken or not taken based upon advice of counsel shall 
be deemed consented to by you, or (ii) refrain from taking any action 
other than to retain the funds in escrow for delivery in accordance with
 the written agreement of the Users, the final decision or award of an 
arbitrator pursuant to an arbitration commenced and conducted in 
accordance with the General Instructions or a final, non-appealable 
judgment of a court of competent jurisdiction, or (iii) discharge our 
duties under this Agreement by depositing all funds by interpleader 
action with a court of competent jurisdiction in accordance with the 
procedures outlined in the General Instructions. LindaPay may, at any 
time, give notice of LindaPay's intent to resign as Escrow Agent. If, 
within ten (10) days of such notice, LindaPay has not received notice 
from all Users in a Transaction that they have designated a substitute 
escrow agent (which notice shall identify the substitute escrow agent), 
LindaPay may discharge LindaPay duties under this Agreement by 
depositing all escrowed funds with a court of competent jurisdiction. If
 an alternate Escrow Agent is so designated, LindaPay shall be 
discharged from LindaPay duties under this Agreement, the General 
Instructions and the Transaction Escrow Instructions by delivering all 
escrowed funds to such person or entity. Upon payment of the escrow 
funds pursuant to this Agreement, LindaPay shall be fully released from 
any and all liability and obligations with respect to the escrow funds 
and the Transaction.</p>
                    <p>10.	<strong>Canceling a Transaction</strong> - If
 a Transaction cannot be completed for any reason, including 
cancellation by LindaPay for any reason, LindaPay will notify each User 
in such Transaction by e-mail, to the e-mail address each has provided 
to LindaPay. In LindaPay's sole discretion, LindaPay may cancel any 
Transaction if any User in a Transaction fails to agree on the terms as 
required in the Transaction Details page by clicking the "I Agree" 
button as requested on the Site. You may cancel a Transaction as 
provided in this Agreement, on the General Instructions or in the 
Transaction Escrow Instructions.</p>
                    <p>
                        11. <strong>Questions about the Services</strong>
 - You may inquire about payments made through the Service by calling 
the number that appears on the Site or by filling out the customer 
service form. If you believe an error has been made or there has been 
any unauthorized use of your Account or the

                        Services, you agree to call or send an e-mail as
 soon as possible, but no later than forty-eight hours after you became 
aware of an error. When you contact LindaPay, please be prepared to 
provide your name, LindaPay reference number and your email address 
which you have registered on the LindaPay site.
                    </p>
                    <p>12. <strong>	Statements &amp; Verification</strong>
 - You agree that all disclosures and communications regarding this 
Agreement and the Service shall be made by e-mail or on the Site, unless
 the parties make other arrangements as set forth in the General 
Instructions.</p>
                    <p>13. <strong>Digital Identification</strong> - You
 understand and agree that LindaPay will create, issue, and verify a 
digital identification (a "Digital ID") for each User. This Digital ID 
is attached to each accepted electronic document and notification 
e-mails. You agree that your Digital ID is a valid "Electronic 
Signature." Please review the General Instructions for more information 
about LindaPay's use of the Digital ID.</p>
                    <p>14. <strong>Fees</strong> - Unless otherwise 
agreed upon by each User in the Transaction, Buyer agrees to pay the 
fees for the Services that are disclosed on the Site at the time the 
completed Transaction Escrow Instructions are agreed to by all such 
Users, as well as any other fees.  Once paid, LindaPay fees are 
nonrefundable. LindaPay fees may change from time to time in LindaPay's 
absolute and sole discretion. LindaPay is not responsible for payment of
 any sales, use, personal property or other governmental tax or levy 
imposed on any items purchased or sold through the Services or otherwise
 arising from the Transaction.</p>
                    <p>15. <strong>Security</strong> - LindaPay uses a 
security protocol that provides data encryption, server authentication, 
and message integrity for connections to the Internet to ensure that the
 data you provide LindaPay is not transmitted over the Internet 
unencrypted and cannot be viewed by unauthorized individuals. LindaPay 
has also implemented a security system requiring a user ID and a 
password to access your transactions on the Site. You agree not to give 
your password to any other person or entity and to protect it from being
 used or discovered by anyone else. You also agree not to give your 
payment or card details to anyone else regardless of whether they are 
LindaPay users or not. Should your payment be details be saved on 
another person’s account, LindaPay holds no liability for the initiation
 of credit or debit transactions, as applicable, obtainment of the 
purchase price and fees due for a Transaction and initiation of any 
debit or credit entries or reversals, as the case may be charged to your
 card(s) or on the basis of your payment/account details.</p>
                    <p>
                        16.	<strong>Disclaimers</strong> - You expressly
 agree that your use of the Services is at your sole risk. The Services 
are provided on a strictly "as is" and "as available" basis. LindaPay 
MAKES NO WARRANTY WITH REGARD TO THE UNDERLYING TRANSACTION, ANY ITEMS 
OBTAINED BY YOU THROUGH THE USE OF THE SITE OR THE SERVICES, THAT THE 
SERVICES WILL MEET YOUR REQUIREMENTS, OR THAT THE SERVICES OR THE SITE 
WILL BE UNINTERRUPTED, TIMELY, OR ERROR FREE.
                        LindaPay expressly disclaims any and all express
 and implied warranties, including, but not limited to, the implied 
warranties of merchantability, fitness for a particular purpose and 
non-infringement. LindaPay shall not be liable or responsible for those 
guarantees, warranties and representations, if any,

                        offered by any Seller of items. No advice or 
information, whether oral or written, obtained by you from LindaPay or 
through the Services shall create any warranty not expressly made 
herein.
                        You acknowledge and agree that LindaPay does not
 endorse the website of any third party, or assume responsibility or 
liability for the accuracy of any material contained therein, or any 
infringement of third party intellectual property rights arising 
therefrom, or any fraud or other crime facilitated thereby. In no event 
will LindaPay be liable for any act or omission of any third party, 
including, but not limited to, your financial institution, any payment 
system, any third party service provider, any provider of 
telecommunications services, Internet access or computer equipment or 
software, any mail or delivery service or any payment or clearing house 
system or for any circumstances beyond LindaPay's control (including but
 not limited to, fire, flood or other natural disaster, war, riot, 
strike, terrorism, act of civil or military authority, equipment 
failure, computer virus, infiltration or hacking by a third party, or 
failure or interruption of electrical, telecommunications or other 
utility services).
                    </p>
                    <p>17. <strong>Limitation of Liability</strong> - TO
 THE EXTENT PERMITTED BY APPLICABLE LAW, NEITHER LindaPay NOR ITS 
AFFILIATES, SHALL BE LIABLE FOR ANY DAMAGES, WHETHER DIRECT, INDIRECT, 
INCIDENTAL, SPECIAL OR CONSEQUENTIAL, RELATING TO YOUR USE OF THE SITE 
OR THE SERVICES OR YOUR INABILITY TO USE THE SITE OR THE SERVICES.</p>
                    <p>18. <strong>Termination of Services</strong> - 
LindaPay may suspend or terminate your use of the Services at any time, 
without notice for any reason, in LindaPay's sole discretion. Except as 
warranted by risk to the security, privacy or integrity of the Services,
 LindaPay will attempt to provide you with prior notice of the 
suspension or termination of the Services by sending you an e-mail, but 
LindaPay is not obligated to do so. You shall remain liable for all 
Transactions you initiate through the Services prior to such 
termination, and the performance of your obligations, including but not 
limited to, the delivery of the items and the payment of all amounts you
 owe prior to termination or discontinuation of your use of the 
Services. You agree to pay all costs and expenses (including reasonable 
attorneys' fees) that LindaPay may incur in order to (a) collect any 
amounts you owe under this Agreement, the General Instructions, or the 
Transaction Escrow Instructions or (b) to initiate an arbitration or 
judicial proceeding to resolve a dispute between Buyer and Seller, as 
set forth in the General Instructions.</p>
                    <p>19. <strong>Non-Transferability of the Services</strong>
 - You may not assign this Agreement or the Escrow Instructions to any 
other person or entity. Your right to use the Services shall not be sold
 or transferred to any other person or entity without the prior written 
consent of LindaPay. LindaPay may assign this Agreement upon notice to 
you. Any assignment or transfer in violation of this provision shall be 
null and void.</p>
                    <p>20. <strong>Modifications</strong> - LindaPay 
reserves the right to change this Agreement, or any portion of it, at 
any time, without prior notice, provided that no such change will apply 
to a Transaction once the Users to such Transaction have agreed to the 
Transaction Escrow Instructions. You understand that the most recent 
version of this Agreement will be located on the Site.</p>
                    <p>21. <strong>Notices</strong> - Notices from 
LindaPay to you will be given by e-mail, or by general posting on the 
Site. You may contact LindaPay by filling out the customer support form 
or such other email address as LindaPay posts as its address for notice 
on the Site in the most recent version of the Terms of Use</p>
                    <p>22. <strong>Indemnification</strong> - You agree 
to indemnify and hold LindaPay, LindaPay affiliates and their respective
 officers, directors, shareholders, employees and assigns, harmless from
 any claim, demand, expense or damage, including reasonable attorneys' 
fees and court costs, arising from or relating to your use of the 
Services or any violation of this Agreement, the rules contained on the 
Site or the Transaction Escrow Instructions, including, without 
limitation, payment of LindaPay fees and any charge backs from a card 
organization or reversal or nonpayment of any credit or debit entry.</p>
                    <p>23. <strong>Miscellaneous</strong> - In the event
 of any dispute, claim, question, or disagreement arising from or 
relating to, this Agreement or to the Underlying Transaction, or breach 
of any of them, you agree to resolve such dispute in the manner set 
forth in the General Instructions. This Agreement shall be governed by 
the laws of the Federal Republic of Nigeria. Any dispute shall be 
resolved pursuant to the Dispute Resolution and Governing Law/Venue 
provisions of the General Instructions. This Agreement in conjunction 
with the General Instructions and rules contained on the Site 
constitutes the entire agreement between LindaPay and you relating to 
the subject matter hereof and supersedes all prior or contemporaneous 
understandings, agreements, communications and/or advertising with 
respect to such subject matter. If there is a conflict between the terms
 and conditions of this Agreement, the rules contained on the Site, 
and/or the General Instructions, then the conflicting terms set forth in
 the General Instructions shall control first, these Terms of Use shall 
control second and the rules contained on the Site shall control third. 
The General Instructions are incorporated herein by this reference. 
LindaPay's failure to exercise or enforce any right or provision of this
 Agreement shall not constitute a waiver of such right or provision 
unless acknowledged and agreed to by LindaPay in writing. If any term or
 other provision of this Agreement is invalid, illegal or incapable of 
being enforced by any law or public policy, all other terms and 
provisions of this Agreement shall nevertheless remain in full force and
 effect for so long as the economic or legal substance of the 
transactions contemplated hereby is not affected in any manner 
materially adverse to any party hereto.</p>
                    <p>LindaPay may assign this Agreement to any current
 or future affiliated company and to any successor in interest. LindaPay
 also may delegate certain of LindaPay rights and responsibilities under
 the Agreement to independent contractors or other third parties.</p>
                    <p>If you are a registered User of the Site, then 
each time you request the Services will constitute your agreement to 
these Terms of Use, as amended from time to time in LindaPay's sole 
discretion, and evidence that you have read, understood and accepted the
 then applicable Terms of Use.</p>

                    <p>Revised: November, 2022</p>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Privacy