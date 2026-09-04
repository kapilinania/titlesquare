// Title Square Comprehensive Bilingual System (English & Hindi)
const translations = {
  en: {
    // Navigation & Top Bar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.knowLaw": "Know the Law",
    "nav.cities": "Cities",
    "nav.about": "About Us",
    "nav.contact": "Contact Us",
    "nav.lang": "English",
    "nav.loginRegister": "Login / Register",
    "nav.portalLogin": "Portal Login",
    "nav.dashboard": "Audit Dashboard",
    "top.cities": "Delhi NCR & Guwahati",
    "top.call": "+91 98717 61798",
    "top.email": "contact@titlesquare.in",

    // Hero Section
    "hero.eyebrow": "Advocate-Verified Property Due Diligence",
    "hero.title": "Know the Truth<br>About Your Property<br><span>Before You Buy</span>",
    "hero.desc": "Empanelled High Court advocates conduct 30-year archival searches, revenue mutation audits, and bank loan verification before you put your hard-earned money at risk.",
    "hero.check1": "30-Year Chain of Title & Non-Encumbrance",
    "hero.check2": "Jamabandi / Patta Revenue Verification",
    "hero.check3": "Report Delivered in 24-48 Hours",
    "hero.ctaCheck": "Check My Property Now",
    "hero.ctaServices": "View All Services",

    // Hero Form
    "form.heroTitle": "Get Your Free Property Check",
    "form.heroSub": "Instant response • WhatsApp Report",
    "form.propType": "Property Type",
    "form.selectProp": "Select property type",
    "form.plot": "Plot / Land",
    "form.flat": "Apartment / Flat",
    "form.commercial": "Commercial Space",
    "form.agri": "Agricultural Land",
    "form.city": "City",
    "form.name": "Your Name",
    "form.namePh": "Full name",
    "form.phone": "WhatsApp Number",
    "form.phonePh": "10-digit mobile number",
    "form.btnSubmit": "Get My Property Report",
    "form.footnote": "Free consultation. No spam. Confidential.",

    // Trust Stats Bar
    "trust.stat1Num": "Azara, Guwahati",
    "trust.stat1Txt": "Royal Residency Chamber (Airport Rd)",
    "trust.stat2Num": "Delhi NCR",
    "trust.stat2Txt": "22+ Sub-Registrar Offices",
    "trust.stat3Num": "Pan-India",
    "trust.stat3Txt": "Bank Loan Due Diligence",
    "trust.stat4Num": "24–48 Hrs",
    "trust.stat4Txt": "Express Report Delivery",

    // 4-Stage Forensic Audit
    "audit.tag": "Audit Methodology",
    "audit.heading": "Our 4-Stage Forensic Title Audit Framework",
    "audit.sub": "How our empanelled advocates scrutinize physical and digital archives to uncover hidden mortgages, fake powers of attorney, and revenue disputes.",
    "audit.s1": "STAGE 01",
    "audit.s1Title": "30-Year Archival Sub-Registrar Search",
    "audit.s1Desc": "Physical inspection of Sub-Registrar registers (Book 1 & Index II) from 1994 to present. We trace every mother deed, sale deed, gift deed, and partition in the chain.",
    "audit.s1Tag": "Deliverable: Unbroken Chain Matrix",
    "audit.s2": "STAGE 02",
    "audit.s2Title": "Revenue & Jamabandi Circle Audit",
    "audit.s2Desc": "Direct verification with Circle Officer records (Dharitree portal in Guwahati and Khasra/Khatauni in Delhi). We confirm whether mutation was officially recorded in government ledgers.",
    "audit.s2Tag": "Deliverable: Revenue Mutation Clearance",
    "audit.s3": "STAGE 03",
    "audit.s3Title": "Judicial Litigation & Attachment Check",
    "audit.s3Desc": "Deep search across High Courts, District Courts, Debt Recovery Tribunals (DRT), and RERA to ensure no injunction, stay order, or civil partition suit is pending on the land.",
    "audit.s3Tag": "Deliverable: Court Clearance Certificate",
    "audit.s4": "STAGE 04",
    "audit.s4Title": "Advocate Certified Title Opinion",
    "audit.s4Desc": "Formal Non-Encumbrance Certificate (NEC) & certified Title Search Report (TSR) signed by empanelled High Court advocates, bank-ready for home loans or purchase closure.",
    "audit.s4Tag": "Deliverable: Bank-Grade Legal Opinion",
    "audit.inspect": "Click to Inspect Sample Record",

    // Services Section
    "svc.tag": "What We Do",
    "svc.heading": "Legal Verification Services",
    "svc.c1Title": "30-Year Title Search Report",
    "svc.c1Desc": "Full ownership chain from Sub-Registrar archives — sale deeds, gift deeds, inheritance, and encumbrance history.",
    "svc.c1Btn": "Request Report",
    "svc.c2Title": "Court & Litigation Check",
    "svc.c2Desc": "Search across High Courts, District Courts, DRT and RERA for pending stay orders, civil disputes, or mortgage attachments.",
    "svc.c2Btn": "Check Disputes",
    "svc.c3Title": "Jamabandi & Mutation Check",
    "svc.c3Desc": "Direct revenue circle verification — Dharitree, Jamabandi, Patta in Guwahati and Khasra, Khatauni, DDA records in Delhi NCR.",
    "svc.c3Btn": "Verify Records",
    "svc.viewAll": "View All Services",

    // Interactive Risk Scanner
    "risk.tag": "Interactive Due Diligence Scanner",
    "risk.heading": "Identify Critical Legal Risks in Your Transaction",
    "risk.sub": "Select the scenario that matches your target property to see the exact legal vulnerabilities and how Title Square verifies them.",
    "risk.tabGpa": "Buying via Power of Attorney (GPA)",
    "risk.tabAncestral": "Inherited Land Without Mutation",
    "risk.tabBuilder": "Under-Construction Builder Flat",
    "risk.tabTribal": "Tribal Belt / Agricultural Land",
    
    "risk.gpaBadge": "Critical Legal Risk • Supreme Court Scrutiny",
    "risk.gpaTitle": "Why GPA Sales Cannot Legally Transfer Ownership",
    "risk.gpaDesc": "Under the landmark Supreme Court ruling in <em>Suraj Lamp & Industries vs State of Haryana</em>, a General Power of Attorney (GPA) or Agreement to Sell cannot confer legal title. Sellers who sell via GPA may have revoked the power, or their heirs can legally challenge your possession years later.",
    "risk.protectTitle": "How Title Square Protects You:",
    "risk.gpaP1": "Verify whether the original principal is alive and whether GPA is registered and unrevoked.",
    "risk.gpaP2": "Draft a mandatory direct registered conveyance deed with all legal heirs as confirming parties.",
    "risk.gpaBtn": "Check GPA Property Title →",

    "risk.ancBadge": "High Litigation Risk • Partition Claims",
    "risk.ancTitle": "Buying Inherited Property Without Official Mutation",
    "risk.ancDesc": "Even if a seller holds original parent deeds, without registered partition and updated revenue mutation (Jamabandi/Khatauni), other undisclosed legal heirs (daughters, siblings, coparceners) have an automatic statutory right to file partition suits and freeze your property.",
    "risk.ancP1": "Audit legal heir certificates and survivorship records from revenue circles.",
    "risk.ancP2": "Verify whether Dharitree / Circle Jamabandi reflects exclusive individual mutation.",
    "risk.ancBtn": "Verify Inherited Title →",

    "risk.bldBadge": "Medium-High Risk • Undisclosed Builder Loans",
    "risk.bldTitle": "Buying Under-Construction Flats Without Title Audit",
    "risk.bldDesc": "Builders frequently mortgage the entire project land to banks or NBFCs for construction finance. If you buy without a formal Bank NOC (No Objection Certificate) and Title Clearance, the lending bank holds a primary mortgage lien over your flat!",
    "risk.bldP1": "Scrutinize Development Agreement, Power of Attorney, and Bank Mortgage releases.",
    "risk.bldP2": "Cross-examine RERA disclosures, sanctioned building plans, and fire NOCs.",
    "risk.bldBtn": "Scrutinize Builder Project →",

    "risk.trbBadge": "Statutory Transfer Ban Risk",
    "risk.trbTitle": "Assam Tribal Belt Restrictions & Delhi Agricultural Ceilings",
    "risk.trbDesc": "In Assam, Chapter X of the Assam Land and Revenue Regulation strictly prohibits land transfer to non-notified classes in tribal belts and blocks. In Delhi NCR, Section 33 of Delhi Land Reforms prohibits fragmented agricultural land sales. Transactions violating these laws are automatically void by statute!",
    "risk.trbP1": "Verify Circle demarcation, revenue category (Myadi vs Eksona Patta), and tribal status.",
    "risk.trbP2": "Ensure all mandatory statutory permissions and DC NOCs are cleared before registration.",
    "risk.trbBtn": "Check Revenue & Zoning Restrictions →",

    // Pan-India Section
    "pi.badge": "Nationwide Banking Standards",
    "pi.title": "Pan-India Bank Loan Documentation & Deed Registration",
    "pi.sub": "Empanelled legal drafting, Non-Encumbrance Certificates (NEC), and bank loan dockets conforming to SBI, HDFC, ICICI, PNB, and nationalized bank requirements across India.",
    "pi.btn": "Connect with Legal Desk →",
    "pi.i1Title": "Bank Loan Title Search (TSR)",
    "pi.i1Desc": "Certified 30-year archival Title Search Reports tailored to the strict credit formats of major retail home loan lenders.",
    "pi.i1Tag": "• Available Pan-India",
    "pi.i2Title": "Sale Deed & Conveyance Drafting",
    "pi.i2Desc": "Advocate-drafted bilingual Sale Deeds, Gift Deeds, and Lease Deeds incorporating protective indemnity clauses.",
    "pi.i2Tag": "• Customized Legal Drafting",
    "pi.i3Title": "Sub-Registrar Registration Desk",
    "pi.i3Desc": "Assistance with e-stamping, circle rate calculation, online appointment booking, and Sub-Registrar execution.",
    "pi.i3Tag": "• Delhi NCR & Guwahati Live",
    "pi.i4Title": "Revenue Mutation & Patta Update",
    "pi.i4Desc": "End-to-end liaison for official land revenue ledger updates, Dharitree Jamabandi namjari, and Khasra mutation.",
    "pi.i4Tag": "• Full Legal Representation",

    // Cities Section
    "cities.tag": "Where We Operate",
    "cities.heading": "Currently Active Cities",
    "cities.delhiTitle": "Delhi NCR",
    "cities.delhiDesc": "All 22+ Sub-Registrar offices, DORIS registry & DDA checks",
    "cities.delhiBtn": "Check Delhi Property",
    "cities.ghyTitle": "Guwahati",
    "cities.ghyDesc": "Dispur, Sadar, Azara revenue circles and Dharitree records",
    "cities.ghyBtn": "Check Guwahati Property",
    "cities.mumTitle": "Mumbai",
    "cities.mumDesc": "IGR Maharashtra records - integration in progress",
    "cities.blrTitle": "Bengaluru",
    "cities.blrDesc": "Kaveri 2.0 & BDA Khata verification coming soon",
    "cities.liveBadge": "Live",
    "cities.soonBadge": "Coming Soon",
    "cities.notifyBtn": "Notify Me",
    "cities.viewAll": "View All Cities",

    // FAQ Section
    "faq.tag": "Questions & Answers",
    "faq.heading": "Frequently Asked Questions",
    "faq.q1": "What is a property title search report?",
    "faq.a1": "A property title search report is a certified legal opinion prepared by High Court advocates after scrutinizing Sub-Registrar archives for 30 years. It verifies unbroken ownership transfers, confirms the seller's rightful title, and checks that the property is free from court attachments or undisclosed bank mortgages.",
    "faq.q2": "Why is a title search critical before buying?",
    "faq.a2": "Under Indian property law, the principle of Buyer Beware applies. If you purchase a property with a disputed title, fraudulent GPA, or hidden litigation, you risk losing both your money and the property. Title Square gives you complete legal clarity before you commit.",
    "faq.q3": "What documents are reviewed during a title search?",
    "faq.a3": "Our advocates examine 30 years of registered Sale Deeds, Mother Deeds, Encumbrance Certificates, Jamabandi / Khatauni revenue mutation records, building sanction plans, and pending civil litigation records at the relevant courts.",
    "faq.q4": "How long does a title search take?",
    "faq.a4": "In Delhi NCR and Guwahati, an express digital title check is completed within 24 to 48 hours. Physical Sub-Registrar inspections and deep revenue circle visits take 2 to 4 business days depending on property complexity.",

    // Footer Section
    "footer.desc": "India's dedicated real estate title verification & legal due diligence platform. Protecting property buyers and investors through 30-year archival searches and bank loan documentation.",
    "footer.ghcBadge": "Gauhati High Court Empanelled",
    "footer.delhiBadge": "Delhi Bar Panel",
    "footer.hServices": "Legal Services",
    "footer.s1": "30-Yr Title Search Report",
    "footer.s2": "Deed Registration & Drafting",
    "footer.s3": "Revenue Mutation (Jamabandi)",
    "footer.s4": "Bank Loan Documentation (Pan-India)",
    "footer.s5": "Court Litigation & Stay Check",
    "footer.hAccount": "Client Account",
    "footer.aLogin": "Client Portal Login",
    "footer.aRegister": "Create Free Account",
    "footer.aDashboard": "Audit Dashboard (Demo)",
    "footer.aArticles": "Know the Law (Articles)",
    "footer.aBlog": "Blog & Articles",
    "footer.aCities": "Operational Cities Hub",
    "footer.hCitiesCoverage": "Operational Metro Cities Due Diligence Coverage",
    "footer.viewAllCities": "View All Cities & Jurisdictions →",
    "footer.hChamber": "Registered Chamber",
    "footer.chamberName": "TITLE SQUARE",
    "footer.chamberAddr": "Flat No. 5F, B Block, Royal Residency, Azara SOS Road (Opp. Guwahati Int. Airport), Guwahati, Assam — 781017",
    "footer.hours": "Chamber Hours: Mon–Sat 10:00 AM – 7:30 PM IST",
    "footer.rights": "© 2026 Title Square. All rights reserved. Registered Chamber: Royal Residency, Azara, Guwahati.",
    "footer.disclaimer": "Legal Disclaimer",
    "footer.privacy": "Privacy Policy",
    "footer.demoCred": "Demo Dashboard (contact@titlesquare.in / 123)",

    // Quick Check Widget
    "qc.title": "Quick Check Title Square",
    "qc.q1": "Are Your Property Documents Safe And Up To Date?",
    "qc.q2": "Is Mutation / Jamabandi registered in seller's name in Govt records?",
    "qc.btnYes": "Yes",
    "qc.btnNo": "No",
    "qc.btnNotSure": "Not Sure",
    "qc.btnAudit": "Get Free Advocate Audit Call →",
    "qc.pill": "Property Quick Check",

    // Auth Modal
    "auth.tabReg": "Create Account",
    "auth.tabLog": "Sign In",
    "auth.regTitle": "Create Your <span>Account</span>",
    "auth.regSub": "Protect Your Property From Fraud.",
    "auth.logTitle": "Sign In to Your <span>Account</span>",
    "auth.logSub": "Access your property audits, dockets & certificates.",
    "auth.fullName": "Full Name",
    "auth.namePlaceholder": "Advocate / Buyer Name",
    "auth.mobile": "Mobile Number",
    "auth.mobilePlaceholder": "9871761798",
    "auth.email": "Email Address",
    "auth.emailPlaceholder": "name@domain.com",
    "auth.pass": "Set Password",
    "auth.terms": "I Agree To The Terms Of Service And Privacy Policy",
    "auth.btnCreate": "Create Account",
    "auth.already": "Already Have An Account? ",
    "auth.idLabel": "Mobile No / Email or Username",
    "auth.idPlaceholder": "contact@titlesquare.in / 9871761798 / admin",
    "auth.passLabel": "Password",
    "auth.btnSign": "Sign In to Dashboard",
    "auth.demoFill": "Auto Fill",
    "auth.demoHint": "Demo Portal: contact@titlesquare.in | 9871761798 | 123",
    "auth.dontHave": "Don't Have An Account? ",

    // Sticky Bottom Mobile Nav
    "m.home": "Home",
    "m.services": "Services",
    "m.report": "Get Jamabandi",
    "m.cities": "Cities",
    "m.contact": "Contact",

    // Report Lead Modal
    "modal.title": "Get Jamabandi Copy",
    "modal.sub": "Advocate-verified report delivered on WhatsApp",
    "modal.waOptin": "Send updates on WhatsApp",
    "modal.btn": "Get My Free Jamabandi Copy"
  },

  hi: {
    // Navigation & Top Bar
    "nav.home": "होम",
    "nav.services": "सेवाएं",
    "nav.knowLaw": "कानूनी जानकारी",
    "nav.cities": "शहर",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क करें",
    "nav.lang": "हिन्दी",
    "nav.loginRegister": "लॉग इन / रजिस्टर",
    "nav.portalLogin": "पोर्टल लॉगिन",
    "nav.dashboard": "ऑडिट डैशबोर्ड",
    "top.cities": "दिल्ली एनसीआर और गुवाहाटी",
    "top.call": "+91 98717 61798",
    "top.email": "contact@titlesquare.in",

    // Hero Section
    "hero.eyebrow": "अधिवक्ता-सत्यापित संपत्ति कानूनी जांच",
    "hero.title": "संपत्ति खरीदने से पहले<br>उसकी सच्चाई जानें<br><span>सुरक्षित निवेश करें</span>",
    "hero.desc": "अपनी गाढ़ी कमाई को जोखिम में डालने से पहले उच्च न्यायालय के पैनलबद्ध वकीलों द्वारा 30-वर्षीय अभिलेख जांच, राजस्व म्यूटेशन ऑडिट और बैंक ऋण सत्यापन करवाएं।",
    "hero.check1": "30 वर्षों का मालिकाना हक व भारमुक्त प्रमाणपत्र",
    "hero.check2": "जमाबंदी / पट्टा राजस्व रिकॉर्ड सत्यापन",
    "hero.check3": "24–48 घंटों में एक्सप्रेस रिपोर्ट डिलीवरी",
    "hero.ctaCheck": "मेरी संपत्ति की जांच करें",
    "hero.ctaServices": "सभी सेवाएं देखें",

    // Hero Form
    "form.heroTitle": "निःशुल्क संपत्ति जांच प्राप्त करें",
    "form.heroSub": "तत्काल प्रतिक्रिया • व्हाट्सएप रिपोर्ट",
    "form.propType": "संपत्ति का प्रकार",
    "form.selectProp": "संपत्ति प्रकार चुनें",
    "form.plot": "प्लॉट / भूमि",
    "form.flat": "अपार्टमेंट / फ्लैट",
    "form.commercial": "कमर्शियल स्पेस",
    "form.agri": "कृषि भूमि",
    "form.city": "शहर",
    "form.name": "आपका नाम",
    "form.namePh": "पूरा नाम लिखें",
    "form.phone": "व्हाट्सएप नंबर",
    "form.phonePh": "10-अंकों का मोबाइल नंबर",
    "form.btnSubmit": "मेरी संपत्ति रिपोर्ट प्राप्त करें",
    "form.footnote": "मुफ्त परामर्श। कोई स्पैम नहीं। पूरी तरह गोपनीय।",

    // Trust Stats Bar
    "trust.stat1Num": "अज़ारा, गुवाहाटी",
    "trust.stat1Txt": "रॉयल रेजीडेंसी चैंबर (एयरपोर्ट रोड)",
    "trust.stat2Num": "दिल्ली एनसीआर",
    "trust.stat2Txt": "22+ उप-पंजीयक कार्यालय कवरेज",
    "trust.stat3Num": "अखिल भारतीय (Pan-India)",
    "trust.stat3Txt": "बैंक होम लोन विधिक जांच",
    "trust.stat4Num": "24–48 घंटे",
    "trust.stat4Txt": "एक्सप्रेस रिपोर्ट डिलीवरी",

    // 4-Stage Forensic Audit
    "audit.tag": "ऑडिट कार्यप्रणाली",
    "audit.heading": "हमारी 4-चरणीय फोरेंसिक टाइटल ऑडिट प्रक्रिया",
    "audit.sub": "हमारे पैनलबद्ध वकील छिपे हुए बंधक, फर्जी मुख्तारनामा (POA) और राजस्व विवादों को उजागर करने के लिए भौतिक और डिजिटल रिकॉर्ड की जांच कैसे करते हैं।",
    "audit.s1": "चरण 01",
    "audit.s1Title": "30-वर्षीय उप-पंजीयक (Sub-Registrar) रिकॉर्ड जांच",
    "audit.s1Desc": "1994 से वर्तमान तक उप-पंजीयक रजिस्टरों (Book 1 & Index II) का भौतिक निरीक्षण। हम मूल विलेख, विक्रय पत्र, दान पत्र और विभाजन की श्रृंखला की पुष्टि करते हैं।",
    "audit.s1Tag": "परिणाम: निर्बाध मालिकाना श्रृंखला मैट्रिक्स",
    "audit.s2": "चरण 02",
    "audit.s2Title": "राजस्व व जमाबंदी (Circle Office) ऑडिट",
    "audit.s2Desc": "सर्कल ऑफिसर रिकॉर्ड्स (गुवाहाटी में धरित्री पोर्टल और दिल्ली में खसरा/खतौनी) से सीधा सत्यापन। हम जांचते हैं कि सरकारी खतौनी में दाखिल-खारिज (म्यूटेशन) दर्ज है या नहीं।",
    "audit.s2Tag": "परिणाम: राजस्व म्यूटेशन अनापत्ति रिपोर्ट",
    "audit.s3": "चरण 03",
    "audit.s3Title": "न्यायिक वाद व अदालती स्थगन (Stay) जांच",
    "audit.s3Desc": "उच्च न्यायालय, जिला अदालत, ऋण वसूली न्यायाधिकरण (DRT) और रेरा में विस्तृत जांच ताकि भूमि पर कोई स्थगन आदेश (Injunction/Stay) या मुकदमा लंबित न हो।",
    "audit.s3Tag": "परिणाम: अदालती क्लियरेंस प्रमाणपत्र",
    "audit.s4": "चरण 04",
    "audit.s4Title": "अधिवक्ता प्रमाणित विधिक राय (Title Opinion)",
    "audit.s4Desc": "पैनलबद्ध उच्च न्यायालय के अधिवक्ताओं द्वारा हस्ताक्षरित आधिकारिक गैर-प्रभार प्रमाणपत्र (NEC) और शीर्षक खोज रिपोर्ट (TSR), जो बैंक होम लोन व रजिस्ट्री के लिए मान्य है।",
    "audit.s4Tag": "परिणाम: बैंक-स्वीकृत कानूनी राय",
    "audit.inspect": "सैंपल रिकॉर्ड देखने के लिए क्लिक करें",

    // Services Section
    "svc.tag": "हमारी सेवाएं",
    "svc.heading": "प्रमुख विधिक सत्यापन सेवाएं",
    "svc.c1Title": "30-वर्षीय टाइटल सर्च रिपोर्ट",
    "svc.c1Desc": "उप-पंजीयक अभिलेखागार से पूर्ण स्वामित्व श्रृंखला - विक्रय विलेख, दान पत्र, विरासत और भारमुक्त (NEC) इतिहास।",
    "svc.c1Btn": "रिपोर्ट प्राप्त करें",
    "svc.c2Title": "अदालती वाद व स्थगन जांच",
    "svc.c2Desc": "उच्च न्यायालयों, जिला अदालतों, DRT और रेरा में लंबित स्थगन आदेशों, सिविल मुकदमों या बैंक कुर्की की सघन जांच।",
    "svc.c2Btn": "विवाद जांचें",
    "svc.c3Title": "जमाबंदी व म्यूटेशन जांच",
    "svc.c3Desc": "राजस्व सर्कल से सीधा सत्यापन - गुवाहाटी में धरित्री, जमाबंदी, पट्टा और दिल्ली एनसीआर में खसरा, खतौनी और डीडीए रिकॉर्ड।",
    "svc.c3Btn": "रिकॉर्ड सत्यापित करें",
    "svc.viewAll": "सभी सेवाएं देखें",

    // Interactive Risk Scanner
    "risk.tag": "इंटरएक्टिव कानूनी जोखिम स्कैनर",
    "risk.heading": "अपनी डील में गंभीर कानूनी जोखिमों की पहचान करें",
    "risk.sub": "अपनी लक्षित संपत्ति से संबंधित स्थिति चुनें और देखें कि क्या कानूनी खामियां हो सकती हैं और टाइटल स्क्वायर उनका समाधान कैसे करता है।",
    "risk.tabGpa": "मुख्तारनामा (GPA) द्वारा खरीद",
    "risk.tabAncestral": "बिना दाखिल-खारिज पैतृक भूमि",
    "risk.tabBuilder": "निर्माणाधीन बिल्डर फ्लैट",
    "risk.tabTribal": "जनजातीय बेल्ट / कृषि भूमि",
    
    "risk.gpaBadge": "गंभीर कानूनी जोखिम • सुप्रीम कोर्ट का कड़ा फैसला",
    "risk.gpaTitle": "जीपीए (GPA) बिक्री से कानूनी मालिकाना हक क्यों नहीं मिलता",
    "risk.gpaDesc": "सूरज लैंप मामले में सुप्रीम कोर्ट के ऐतिहासिक फैसले के अनुसार, जनरल पावर ऑफ अटॉर्नी (GPA) या एग्रीमेंट टू सेल से कानूनी मालिकाना हक हस्तांतरित नहीं होता। जीपीए रद्द हो सकता है या विक्रेता के वारिस वर्षों बाद आपके कब्जे को चुनौती दे सकते हैं।",
    "risk.protectTitle": "टाइटल स्क्वायर आपकी सुरक्षा कैसे करता है:",
    "risk.gpaP1": "जांचते हैं कि मूल मालिक जीवित है या नहीं और क्या जीपीए उप-पंजीयक के यहां पंजीकृत व वैध है।",
    "risk.gpaP2": "सभी कानूनी वारिसों को पुष्टिकर्ता पक्षकार बनाकर अनिवार्य प्रत्यक्ष पंजीकृत विक्रय विलेख तैयार करवाते हैं।",
    "risk.gpaBtn": "जीपीए संपत्ति टाइटल जांचें →",

    "risk.ancBadge": "उच्च मुकदमेबाजी जोखिम • पारिवारिक बंटवारा विवाद",
    "risk.ancTitle": "बिना आधिकारिक म्यूटेशन के पैतृक संपत्ति की खरीद",
    "risk.ancDesc": "भले ही विक्रेता के पास मूल दस्तावेज हों, लेकिन पंजीकृत पारिवारिक बंटवारे और राजस्व म्यूटेशन (जमाबंदी/खतौनी) के बिना, अन्य अज्ञात कानूनी वारिस (बेटियां, भाई-बहन) बंटवारे का मुकदमा दायर कर संपत्ति कुर्क करवा सकते हैं।",
    "risk.ancP1": "राजस्व कार्यालयों से कानूनी वारिस प्रमाणपत्र और उत्तरजीविता अभिलेखों की गहन जांच करते हैं।",
    "risk.ancP2": "जांचते हैं कि क्या सरकारी धरित्री / सर्कल जमाबंदी में विक्रेता के नाम पर स्वतंत्र दाखिल-खारिज दर्ज है।",
    "risk.ancBtn": "पैतृक टाइटल सत्यापित करें →",

    "risk.bldBadge": "मध्यम-उच्च जोखिम • बिल्डर का अघोषित बैंक ऋण",
    "risk.bldTitle": "बिना विधिक जांच निर्माणाधीन फ्लैट खरीदना",
    "risk.bldDesc": "बिल्डर अक्सर निर्माण ऋण के लिए संपूर्ण प्रोजेक्ट भूमि को बैंकों के पास गिरवी रख देते हैं। यदि आप बिना बैंक एनओसी (NOC) और टाइटल क्लीयरेंस के खरीदते हैं, तो बैंक के पास आपके फ्लैट पर पहला कानूनी अधिकार रहता है!",
    "risk.bldP1": "विकास समझौता (DA), पावर ऑफ अटॉर्नी और बैंक बंधक विमुक्ति (NOC) की पड़ताल करते हैं।",
    "risk.bldP2": "रेरा खुलासे, नगर निगम स्वीकृत नक्शे और फायर अनापत्ति प्रमाणपत्र की विस्तृत जांच करते हैं।",
    "risk.bldBtn": "बिल्डर प्रोजेक्ट की जांच करें →",

    "risk.trbBadge": "कानूनी प्रतिबंध उल्लंघन जोखिम",
    "risk.trbTitle": "असम ट्राइबल बेल्ट प्रतिबंध व दिल्ली कृषि सीमा कानून",
    "risk.trbDesc": "असम में भू-राजस्व विनियम का अध्याय X ट्राइबल बेल्ट में गैर-अधिसूचित वर्गों को भूमि हस्तांतरण पर सख्त रोक लगाता है। दिल्ली में दिल्ली भूमि सुधार अधिनियम की धारा 33 खंडित कृषि भूमि की बिक्री रोकती है। इनका उल्लंघन करने वाले सौदे स्वतः अवैध हो जाते हैं!",
    "risk.trbP1": "सर्कल सीमांकन, पट्टा श्रेणी (म्यादी बनाम एकसना) और ट्राइबल बेल्ट स्थिति का सत्यापन करते हैं।",
    "risk.trbP2": "रजिस्ट्री से पूर्व उपायुक्त (DC) कार्यालय से सभी अनिवार्य कानूनी अनुमतियों और एनओसी की पुष्टि करते हैं।",
    "risk.trbBtn": "राजस्व व जोनिंग प्रतिबंध जांचें →",

    // Pan-India Section
    "pi.badge": "राष्ट्रव्यापी बैंकिंग मानक",
    "pi.title": "अखिल भारतीय बैंक ऋण दस्तावेज व विलेख रजिस्ट्री",
    "pi.sub": "एसबीआई, एचडीएफसी, आईसीआईसीआई, पीएनबी और राष्ट्रीयकृत बैंकों के दिशानिर्देशों के अनुरूप पूरे भारत के लिए प्रमाणित कानूनी ड्राफ्टिंग, गैर-प्रभार प्रमाणपत्र (NEC) और लोन डॉकेट।",
    "pi.btn": "विधिक सहायता डेस्क से जुड़ें →",
    "pi.i1Title": "बैंक लोन टाइटल सर्च (TSR)",
    "pi.i1Desc": "प्रमुख होम लोन बैंकों के सख्त क्रेडिट नियमों के अनुरूप 30-वर्षीय प्रमाणित शीर्षक खोज रिपोर्ट।",
    "pi.i1Tag": "• पूरे भारत में उपलब्ध",
    "pi.i2Title": "सेल डीड व कन्वेंस ड्राफ्टिंग",
    "pi.i2Desc": "खरीदार सुरक्षा क्षतिपूर्ति शर्तों के साथ अधिवक्ताओं द्वारा तैयार द्विभाषी विक्रय विलेख, दान पत्र और लीज डीड।",
    "pi.i2Tag": "• अनुकूलित विधिक ड्राफ्टिंग",
    "pi.i3Title": "उप-पंजीयक रजिस्ट्री सहायता",
    "pi.i3Desc": "ई-स्टांपिंग, सर्कल रेट मूल्यांकन, ऑनलाइन टोकन स्लॉट और उप-पंजीयक कार्यालय में रजिस्ट्री संपादन में पूर्ण सहायता।",
    "pi.i3Tag": "• दिल्ली एनसीआर और गुवाहाटी में सक्रिय",
    "pi.i4Title": "राजस्व दाखिल-खारिज व पट्टा नामांतरण",
    "pi.i4Desc": "सरकारी भू-राजस्व रिकॉर्ड, धरित्री जमाबंदी नामजारी और खसरा म्यूटेशन कराने के लिए संपूर्ण कानूनी प्रतिनिधित्व।",
    "pi.i4Tag": "• पूर्ण कानूनी प्रतिनिधित्व",

    // Cities Section
    "cities.tag": "हमारी उपस्थिति",
    "cities.heading": "वर्तमान में सक्रिय शहर",
    "cities.delhiTitle": "दिल्ली एनसीआर",
    "cities.delhiDesc": "सभी 22+ उप-पंजीयक कार्यालय, डोरिस रजिस्ट्री और डीडीए रिकॉर्ड जांच",
    "cities.delhiBtn": "दिल्ली संपत्ति जांचें",
    "cities.ghyTitle": "गुवाहाटी",
    "cities.ghyDesc": "दिसपुर, सदर, अज़ारा राजस्व सर्कल और धरित्री रिकॉर्ड",
    "cities.ghyBtn": "गुवाहाटी संपत्ति जांचें",
    "cities.mumTitle": "मुंबई",
    "cities.mumDesc": "आईजीआर महाराष्ट्र रिकॉर्ड्स - एकीकरण प्रगति पर",
    "cities.blrTitle": "बेंगलुरु",
    "cities.blrDesc": "कावेरी 2.0 और बीडीए खाता सत्यापन शीघ्र उपलब्ध",
    "cities.liveBadge": "सक्रिय",
    "cities.soonBadge": "शीघ्र उपलब्ध",
    "cities.notifyBtn": "मुझे सूचित करें",
    "cities.viewAll": "सभी शहर देखें",

    // FAQ Section
    "faq.tag": "प्रश्न और उत्तर",
    "faq.heading": "अक्सर पूछे जाने वाले प्रश्न",
    "faq.q1": "प्रॉपर्टी टाइटल सर्च रिपोर्ट क्या है?",
    "faq.a1": "प्रॉपर्टी टाइटल सर्च रिपोर्ट उच्च न्यायालय के अधिवक्ताओं द्वारा उप-पंजीयक अभिलेखागार के 30 वर्षों के रिकॉर्ड की जांच के बाद तैयार की गई प्रमाणित कानूनी राय है। यह स्वामित्व के निर्बाध हस्तांतरण की पुष्टि करती है, विक्रेता के वैध अधिकार को प्रमाणित करती है और यह सुनिश्चित करती है कि संपत्ति पर कोई बैंक बंधक या अदालती कुर्की नहीं है।",
    "faq.q2": "संपत्ति खरीदने से पहले टाइटल सर्च क्यों अनिवार्य है?",
    "faq.a2": "भारतीय संपत्ति कानून के तहत 'क्रेता सावधान रहे' (Caveat Emptor) का नियम लागू होता है। यदि आप विवादित स्वामित्व, फर्जी मुख्तारनामा या गुप्त मुकदमे वाली संपत्ति खरीदते हैं, तो आपके पैसे और संपत्ति दोनों डूब सकते हैं। टाइटल स्क्वायर बयाना देने से पहले आपको पूर्ण कानूनी सुरक्षा प्रदान करता है।",
    "faq.q3": "टाइटल सर्च के दौरान किन दस्तावेजों की जांच की जाती है?",
    "faq.a3": "हमारे वकील 30 वर्षों के पंजीकृत सेल डीड, मूल पैरेंट डीड (Mother Deeds), भारमुक्त प्रमाणपत्र (EC), जमाबंदी/खतौनी म्यूटेशन रिकॉर्ड, स्वीकृत भवन मानचित्र और संबंधित अदालतों में लंबित सिविल मुकदमों की पड़ताल करते हैं।",
    "faq.q4": "टाइटल सर्च रिपोर्ट प्राप्त करने में कितना समय लगता है?",
    "faq.a4": "दिल्ली एनसीआर और गुवाहाटी में एक्सप्रेस डिजिटल टाइटल जांच 24 से 48 घंटों में पूरी हो जाती है। उप-पंजीयक कार्यालयों के भौतिक अभिलेखों और राजस्व सर्कल की विस्तृत जांच में संपत्ति की जटिलता के आधार पर 2 से 4 कार्यदिवस लगते हैं।",

    // Footer Section
    "footer.desc": "भारत का समर्पित रियल एस्टेट टाइटल सत्यापन व कानूनी जांच मंच। 30-वर्षीय अभिलेख जांच और बैंक लोन विधिक सत्यापन द्वारा खरीदारों के निवेश की सुरक्षा।",
    "footer.ghcBadge": "गुवाहाटी उच्च न्यायालय पैनलबद्ध",
    "footer.delhiBadge": "दिल्ली बार एसोसिएशन पैनल",
    "footer.hServices": "कानूनी सेवाएं",
    "footer.s1": "30-वर्षीय टाइटल सर्च रिपोर्ट",
    "footer.s2": "डीड ड्राफ्टिंग व रजिस्ट्री",
    "footer.s3": "राजस्व म्यूटेशन (जमाबंदी)",
    "footer.s4": "बैंक लोन डॉक्युमेंटेशन (अखिल भारतीय)",
    "footer.s5": "अदालती वाद व स्थगन जांच",
    "footer.hAccount": "ग्राहक खाता",
    "footer.aLogin": "क्लाइंट पोर्टल लॉगिन",
    "footer.aRegister": "निःशुल्क खाता बनाएं",
    "footer.aDashboard": "ऑडिट डैशबोर्ड (डेमो)",
    "footer.aArticles": "कानूनी जानकारी (लेख)",
    "footer.aBlog": "ब्लॉग और लेख",
    "footer.aCities": "सक्रिय शहर केंद्र",
    "footer.hCitiesCoverage": "सक्रिय मेट्रो शहर कानूनी जांच कवरेज",
    "footer.viewAllCities": "सभी शहर और क्षेत्राधिकार देखें →",
    "footer.hChamber": "पंजीकृत कार्यालय",
    "footer.chamberName": "टाइटल स्क्वायर",
    "footer.chamberAddr": "फ्लैट नं. 5F, बी ब्लॉक, रॉयल रेजीडेंसी, अज़ारा एसओएस रोड (गुवाहाटी अंतरराष्ट्रीय हवाई अड्डे के सामने), गुवाहाटी, असम — 781017",
    "footer.hours": "कार्यालय समय: सोम-शनि सुबह 10:00 - शाम 7:30 IST",
    "footer.rights": "© 2026 टाइटल स्क्वायर। सर्वाधिकार सुरक्षित। पंजीकृत कार्यालय: रॉयल रेजीडेंसी, अज़ारा, गुवाहाटी।",
    "footer.disclaimer": "कानूनी अस्वीकरण",
    "footer.privacy": "गोपनीयता नीति",
    "footer.demoCred": "डेमो डैशबोर्ड (contact@titlesquare.in / 123)",

    // Quick Check Widget
    "qc.title": "टाइटल स्क्वायर त्वरित जांच (Quick Check)",
    "qc.q1": "क्या आपके संपत्ति के दस्तावेज सुरक्षित और अद्यतन हैं?",
    "qc.q2": "क्या सरकारी राजस्व रिकॉर्ड में जमाबंदी / म्यूटेशन विक्रेता के नाम पर है?",
    "qc.btnYes": "हाँ",
    "qc.btnNo": "नहीं",
    "qc.btnNotSure": "निश्चित नहीं",
    "qc.btnAudit": "मुफ्त वकील परामर्श कॉल प्राप्त करें →",
    "qc.pill": "संपत्ति त्वरित जांच",

    // Auth Modal
    "auth.tabReg": "नया खाता बनाएं",
    "auth.tabLog": "लॉग इन करें",
    "auth.regTitle": "अपना <span>खाता बनाएं</span>",
    "auth.regSub": "अपनी संपत्ति को धोखाधड़ी से सुरक्षित रखें।",
    "auth.logTitle": "अपने <span>खाते में लॉग इन करें</span>",
    "auth.logSub": "अपने संपत्ति ऑडिट, डॉकेट और प्रमाणपत्र तक पहुंचें।",
    "auth.fullName": "पूरा नाम",
    "auth.namePlaceholder": "वकील / खरीदार का नाम",
    "auth.mobile": "मोबाइल नंबर",
    "auth.mobilePlaceholder": "9871761798",
    "auth.email": "ईमेल पता",
    "auth.emailPlaceholder": "name@domain.com",
    "auth.pass": "पासवर्ड बनाएं",
    "auth.terms": "मैं सेवा की शर्तों और गोपनीयता नीति से सहमत हूँ",
    "auth.btnCreate": "खाता बनाएं",
    "auth.already": "क्या पहले से खाता है? ",
    "auth.idLabel": "मोबाइल नंबर / ईमेल या यूज़रनेम",
    "auth.idPlaceholder": "contact@titlesquare.in / 9871761798 / admin",
    "auth.passLabel": "पासवर्ड",
    "auth.btnSign": "डैशबोर्ड में लॉग इन करें",
    "auth.demoFill": "डेमो भरें",
    "auth.demoHint": "डेमो पोर्टल: contact@titlesquare.in | 9871761798 | 123",
    "auth.dontHave": "क्या आपके पास खाता नहीं है? ",

    // Sticky Bottom Mobile Nav
    "m.home": "होम",
    "m.services": "सेवाएं",
    "m.report": "जमाबंदी प्राप्त करें",
    "m.cities": "शहर",
    "m.contact": "संपर्क",

    // Report Lead Modal
    "modal.title": "जमाबंदी प्रति प्राप्त करें",
    "modal.sub": "अधिवक्ता-सत्यापित रिपोर्ट व्हाट्सएप पर प्राप्त करें",
    "modal.waOptin": "व्हाट्सएप पर अपडेट भेजें",
    "modal.btn": "मेरी मुफ्त जमाबंदी प्रति प्राप्त करें"
  }
};

let currentLanguage = localStorage.getItem('titlesquare_lang') || 'en';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('titlesquare_lang', lang);
  document.documentElement.lang = lang;

  // 1. Translate all text elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // 2. Translate input placeholders with data-i18n-ph attribute
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // 3. Update all language toggle buttons
  const langBtns = document.querySelectorAll('.btn-lang, #btnLangToggle');
  langBtns.forEach(btn => {
    const label = lang === 'en' ? 'English' : 'हिन्दी';
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
      <span>${label}</span>
    `;
  });

  // 4. Update Header Auth Buttons
  document.querySelectorAll('.btn-auth-red').forEach(btn => {
    btn.textContent = translations[lang]['nav.loginRegister'];
  });
  document.querySelectorAll('.btn-auth-navy').forEach(btn => {
    btn.innerHTML = `
      <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
      <span>${translations[lang]['nav.portalLogin']}</span>
    `;
  });
}

function toggleLanguage() {
  const nextLang = currentLanguage === 'en' ? 'hi' : 'en';
  setLanguage(nextLang);
}

// Ensure language applies immediately and on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
  });
} else {
  setLanguage(currentLanguage);
}

// Delegated click listener for language toggles
document.addEventListener('click', (e) => {
  if (e.target.closest('.btn-lang') || e.target.closest('#btnLangToggle')) {
    e.preventDefault();
    toggleLanguage();
  }
});
