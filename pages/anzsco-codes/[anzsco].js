import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Head from "next/head";
import Section1 from "../../components/CDRWriting/Section1";
import Expectations from "../../components/Expectations";
import Headings from "../../components/Headings";
import Hero2 from "../../components/Hero2";
import Paragraphs from "../../components/Paragraphs";
import { Stack } from "@mui/material";

const SpecificAnzsco = () => {
  const router = useRouter();
  const anzsco = router.query.anzsco;
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const allData = {
    engineeringManager: {
      title: `ANZSCO 133211-Engineering Manager`,
      titleDescription: `Engineering Managers plan, organise, control and coordinate technical engineering operations in an organisation. Engineering strategies and policies are implemented and monitored by engineering managers. To achieve construction and production requirements, engineering managers advise engineering methods and procedures to interpret plans, drawings, and specifications.`,
      image: `/images/SpecificAnzsco/engineeringManager.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Visa Provision`,
      thirdDescription: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied for. Visas in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer sponsored visas.`,
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],
      unitTitle: `Unit Group 1332: Engineering Managers`,
      unitDescription: `Engineering strategies and policies are implemented and monitored by engineering managers. Engineering Managers plan, organise, control and coordinate technical engineering operations in an organisation. To achieve construction and production requirements, engineering managers advise engineering methods and procedures to interpret plans, drawings, and specifications.`,
      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: `Engineering Manager ANZSCO 133211`,
      stageTitle: `Stage 2 Competency Assessment will meet the following Expectations of EA`,
      stageDescription: `In Stage 2 Competency Assessment engineer will demonstrate engineering skill and knowledge to Engineers Australia for Chartered membership. The community has certain expectations of seasoned professional engineers, including their expertise, application, and behaviour. Experienced professional engineers are required as leaders and supervisors`,
      stageList: [
        `Engineering strategies, policies, and plans must be developed, implemented, and monitored.
      `,
        `Interpreting plans, drawings, and specifications and advising on engineering processes and procedures to meet construction 
      and   production goals.
      `,
        `Creating project timelines and budgets.
      `,
        `Assuring compliance with specifications and plans and laws, regulations, and safety requirements.
      `,
        `Ensuring that engineering quality, cost, safety, timeliness, and performance criteria are met.
      `,
        `Managing maintenance requirements to maximise efficiency.
      `,
        `Coordination of engineering components of the new building and product design with marketing, research, and manufacturing 
      management.
      `,
        `Feasible to contribute to research and development initiatives.  
`,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    chemicalEngineer: {
      title: `ANZSCO 233111-Chemical Engineer`,
      titleDescription: `Chemical Engineer designs and develops specifications for chemical process systems. Chemical engineer works on building and managing commercial-scale chemical plants and oversees industrial processing and manufacture of products undergoing physical and chemical changes. It is possible that registration or licensing will be required. `,
      image: "/images/SpecificAnzsco/chemical-engineer.png",
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Visa Provision`,
      thirdDescription: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied for. Visas in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer sponsored visas.`,
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],
      unitTitle: `Unit Group 2331: Chemical and Material Engineers.`,
      unitDescription: `Chemical and Materials Engineers play an essential role in designing and preparing specifications for chemical process systems. Engineers are also responsible for constructing and operating commercial-scale chemical plants and supervising industrial processing and fabrication of products undergoing physical and chemical change.
      Another function of Chemical and Materials Engineers is to explore the characteristics of metals, ceramics, polymers, and other materials and evaluate and develop their technical and commercial applications
      `,
      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • Chemical engineer ANZSCO code 233111 <br />
          • Material Engineer ANZSCO code 233112
        </div>
      ),
      exceptionstitle: "Exceptions",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories`,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      `,
      ],
      requirementtitle: `English Requirement`,
      requirement: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
        
`,
      ],

      tasktitle: [
        "Engineering Managers are responsible for the following tasks:",
      ],
      tasks: [
        `Chemical engineers design chemical process systems and planning control systems for operations such as removing and separating components, effecting chemical changes, testing and evaluating fuels, transferring heat, and controlling the storage and handling of solids, liquids, and gases.
`,
        `Chemical engineers maintain regular communication with material producers, such as metals, ceramics, polymers, cement, and elastomers, throughout the exploration and assessment of materials suited for specific product applications.
`,
        `Chemical engineers met the requirement by using appropriate materials and equipment.
`,
        `It’s the Chemical engineer’s duty to plan and carry out laboratory operations for the development of new materials, as well as fabrication techniques for new materials to meet manufacturing cost and performance criteria.
`,
        `Checking equipment operation and maintenance to ensure optimal efficiency under safe operating circumstances is the responsibility of chemical engineers.
`,
        `Chemical engineers ensure the proper materials and equipment are utilised and meet standards.
`,
        `Chemical engineer investigates product use and pollution control issues.
`,
        `Examining new product plans and giving material selection suggestions based on design criteria and considerations such as strength, weight, and cost falls under civil engineering.
`,
        `It’s the Chemical engineer’s duty to plan and carry out laboratory operations for the development of new materials, as well as fabrication techniques for new materials to meet manufacturing cost and performance criteria.
`,
        `Chemical engineers review product failure data and conduct laboratory testing to determine or rule out potential reasons and provide advice on how to resolve any issues.
`,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },

    civilEngineer: {
      title: `ANZSCO 233211-Civil Engineer.`,
      titleDescription: `Civil Engineers plan to design and supervise the construction of dams, bridges, and water supply schemes. Civil engineers manage large construction projects. A civil engineer plans, designs, organizes and supervises the construction of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other civil engineering projects. It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/civilEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Civil Engineer:`,
      thirdDescription: `Airfield Engineer Officer (Air Force)
      Hydraulics Engineer
      `,
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],
      unitTitle: `Unit Group 2332: Civil Engineering Professionals.`,
      unitDescription: `A civil engineer plans, designs, organizes and supervises the construction of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other civil engineering projects. Civil engineering professionals manage large construction projects. Civil engineering professionals analyse the expected behaviour of soil and rock when subjected to pressure from planned structures and create structural foundations.
      Civil engineering professionals examine the behaviour and durability of materials and statistical features of all sorts. Civil Engineers develop and plan transportation networks estimating and tracking project expenditures.
      `,
      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233211 Civil Engineer
          <br />
          • 233212 Geotechnical Engineer
          <br />
          • 233213 Quantity Surveyor
          <br />
          • 233214 Structural Engineer
          <br />
          • 233215 Transport Engineer
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2332.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],
      requirementtitle: `English Requirement`,
      requirement: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
        
`,
      ],
      languagetitle: "Language proficiency required for Civil Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: ["Civil Engineers are responsible for the following tasks:"],
      tasks: [
        `Civil engineers examine architecture and engineering drawings to determine overall costs and produce thorough cost plans and forecasts to aid in budgetary management.
`,
        `On-site workers are managed and workflow is directed by civil engineers.
`,
        `Civil engineer is responsible for delivery of building supplies, plant and equipment.
`,
        `Civil engineers develop comprehensive strategies for site activity. 
`,
        `Civil engineers design and modify manufacturing variants.
`,
        `Observe design modifications, determine cost consequences, and quantify, value, and manage design variants.
`,
        `Construction techniques, materials, and quality standards are to be written by Civil engineers and 
`,
        `Civil engineers interpret specifications, drawings, plans, construction methods, and processes of building plants.
`,
        `Civil engineers evaluate soil’s safe loading after construction.
`,
        `Civil engineers assess the strength, and comprehensibility of soil and rock by collecting soil and rock samples at various depths throughout sites. 
`,
        `Civil engineers design structures that do not implode, flex, twist or hake in unfavourable ways
`,
        `Civil engineers have knowledge of static and dynamic load analysis of structural systems.
`,
        `Development of physical features of transport networks such as highways, railways, urban transit, air travel, logistics delivery systems, and terminals are done by Civil engineers.
`,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    geotechnicalEngineer: {
      title: `ANZSCO 233212-Geotechnical Engineer.`,
      titleDescription: `Geotechnical engineers analyse the behaviour of soil and rock when placed under pressure. When placed under pressure by proposed structures and designs, soil and rock geotechnical engineers analysebehaviour under mentioned conditions above and below ground foundations. `,
      image: `/images/SpecificAnzsco/geotechnicalEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Civil Engineer:`,
      thirdDescription: `Airfield Engineer Officer (Air Force)
      Hydraulics Engineer
      `,
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],
      unitTitle: `Unit Group 2332: Civil Engineering Professionals.`,
      unitDescription: `Civil engineering professionals plan, design, and supervise the construction of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other geotechnicalengineering projects. Civil engineering professionals manage large construction projects. Structural engineering professionals analyse the expected behaviour of soil and rock when subjected to pressure from planned structures and create structural foundations.
      Civil engineering professionals examine the behaviour and durability of materials and statistical features of all sorts. Structural engineers develop and plan transportation networks estimating and tracking project expenditures.`,
      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233211 StructuralEngineer <br />
          • 233212 Geotechnical Engineer
          <br />
          • 233213 Quantity Surveyor
          <br />
          • 233214 Structural Engineer
          <br />
          • 233215 Transport Engineer
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2332.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],
      requirementtitle: `English Requirement`,
      requirement: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
        
`,
      ],
      languagetitle: "Language proficiency required for Geotechnical Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Geotechnical Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `Geotechnical engineers collect soil and rock samples at various depths across sites.
`,
        `Geotechnical engineers test samples to determine strength, compressibility and other factors that affect the behaviour of soil and rock when a structure is imposed and determine the safe loading for the soil.
`,
        `Increasing population and need for change are considered when geotechnical engineers assess present and future travel flow patterns.
`,
        `Geotechnical engineers monitor changes to designs.
`,
        `Geotechnical engineers assess effects on cost measuring, valuing and negotiating variations to designs.
`,
        `Geotechnical engineerstudies architectural and engineering drawings and specifications to estimate total costs, and prepare detailed cost plans and estimates as tools to assist in budgetary control.
`,
        `Geotechnical engineers organise and direct site labour. 
`,
        `The delivery of construction materials, plant and equipment and establishing detailed programs to coordinate site activities is the responsibility of geotechnical engineers.
`,
        `Geotechnical engineers interpret specifications, drawings, plans, construction methods, and processes of building plants.
`,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    structuralEngineer: {
      title: `ANZSCO 233214-Structural Engineer`,
      titleDescription: `Structural engineers analyse the structural properties of all types of structures.Structural engineers  test  the  durability  and  behaviour  of  materials  used  in  the  construction  of structures. They are responsible for designing and supervising the construction of all types of structures. It is possible that registration or licensing will be required.`,
      image: "/images/SpecificAnzsco/structuralEngineer.png",
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Civil Engineer:`,
      thirdDescription: `Airfield Engineer Officer (Air Force)
      Hydraulics Engineer
      `,
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],
      unitTitle: `Unit Group 2332: Civil Engineering Professionals.`,
      unitDescription: `Civil engineering professionals plan, design, and supervise the construction of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other geotechnicalengineering projects. Civil engineering professionals manage large construction projects. Structural engineering professionals analyse the expected behaviour of soil and rock when subjected to pressure from planned structures and create structural foundations.
      Civil engineering professionals examine the behaviour and durability of materials and statistical features of all sorts. Structural engineers develop and plan transportation networks estimating and tracking project expenditures.`,
      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233211 StructuralEngineer <br />
          • 233212 Geotechnical Engineer
          <br />
          • 233213 Quantity Surveyor
          <br />
          • 233214 Structural Engineer
          <br />
          • 233215 Transport Engineer
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2332.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],
      requirementtitle: `English Requirement`,
      requirement: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
        
`,
      ],
      languagetitle: "Language proficiency required for Geotechnical Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "StructuralEngineersare responsible for the following tasks:",
      ],
      tasks: [
        `Structuralengineers   examine   architecture   and   engineering   drawings   to determine overall  costs  and producethorough  cost  plans  and  forecasts forbudgetary management.•Structuralengineer  is  responsible  for deliveringbuilding  supplies,  plant  and equipment.`,
        `Structuralengineers develop comprehensive strategies for site activity. `,
        `Structural engineersdesign and modify manufacturing variants.`,
        `Observe  design  modifications,  determine  cost  consequences,  quantify,  value, and manage design variants.`,
        `Construction techniques, materials, and quality standardsare to be written by Structural engineersand `,
        `Structural engineers interpret specifications, drawings, plans, construction methods, and processesof building plants.`,
        `Structuralengineers evaluate soil’s safe loading after construction.`,
        `Structuralengineersassess soil  and  rock's  strength  and  comprehensibilityby collecting soil and rock samples at various depths throughout sites.`,
        `Structural  engineersdesign  structures  that donot  implode,  flex,  twistor  hake  in unfavourable ways`,
        `Structural engineers have knowledge of static and dynamic load analysis of structural systems.`,
        `Development of physical features of transport networks such as highways, railways, urban transit, air travel,logistics delivery systems, and terminalsare done by Structural engineers.
`,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    transportEngineer: {
      title: `ANZSCO 233215-Transport Engineer`,
      image: "/images/SpecificAnzsco/transportEngineer.png",
      titleDescription: `Transportengineers  improve  infrastructure efficiency  and  the  cost-effectiveness  of moving people and freight.  Transport engineers are involved in planning and designing the transportation system. It is possible that registration or licensing will be required.`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Civil Engineer:`,
      thirdDescription: [`Airfield Engineer Officer (Air Force)
      Hydraulics Engineer
      `],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],
      unitTitle: `Unit Group 2332: Civil Engineering Professionals.`,
      unitDescription: `A Civil engineering proplans, designs, organizes and supervises the construction of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other Transportengineering    projects. Civilengineeringprofessionals    manage    large construction   projects. Transportengineeringprofessionals analyse   the   expected behaviour  of  soil and  rock  when  subjected  to  pressure  from  planned  structures  and createstructural foundations.Civil  engineeringprofessionals  examine  the  behaviour  and  durability  of  materials  and statistical  features  of  all  sorts. Transportengineers  develop  and  plan  transportation networks estimating and tracking project expenditures.`,
      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233211 StructuralEngineer <br />
          • 233212 Geotechnical Engineer
          <br />
          • 233213 Quantity Surveyor
          <br />
          • 233214 Structural Engineer
          <br />
          • 233215 Transport Engineer
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2332.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],
      requirementtitle: `English Requirement`,
      requirement: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
        
`,
      ],
      languagetitle: "",
      language: "",

      tasktitle: [
        "Transport Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `Transport engineers design the physical aspect of transportation systems.`,
        `Transport  engineers  take  account  into  the  increasing  population  and  need  for change to access present and future travel flow patterns.`,
        `Transport engineers estimate preparing detailed cost plans.`,
        `Transport  engineers  study architectural  engineering  drawings  and  specifications to estimate total cost as toolsto assist in budgetary control.`,
        `Transport  engineers  establish  detailed  programs  for  the  coordination  of  site activities.`,
        `Transport   engineers   organize   and   direct   site   labour   and   the   delivery   of construction materials, plant and equipment.`,
        `Transport   engineers   determine   construction   methods,   materials   and   quality standardsof transportation infrastructure.`,
        `Transport engineers draft and interpret specifications, drawings, plans construction methods and procedures.`,
        `Transport  engineershave  knowledge  of  static  and  dynamic  load  analysis  of transportation systems.`,
        `Transport engineers  design  structures  that  do  not  implode,  flex,  twist  or  hake  in unfavourable ways`,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    electricalEngineer: {
      title: `ANZSCO 233311-Electrical Engineer.`,
      titleDescription: `Electrical engineers are responsible for the generation, distribution, utilization and control of electric power.  Electrical engineers design develops and supervises the manufacture, installation and operation of systems for the utilization of electric power. Electric engineers supervise the maintenance of equipment, machines and systems for the generation, distribution, utilisation and control of electric power. It is possible that registration or licensing will be required`,
      image: `/images/SpecificAnzsco/electricalEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Civil Engineer:`,
      thirdDescription: `Airfield Engineer Officer (Air Force)
      Hydraulics Engineer
      `,
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],
      unitTitle: `Unit Group 2333: Electrical Engineers.`,
      unitDescription: `Electrical engineers are responsible for the generation, distribution, utilization and control of electric power.  Electrical engineers design develops and supervises the manufacture, installation and operation of systems for the utilization of electric power. 
      Electric engineers supervise the maintenance of equipment, machines and systems for the generation, distribution, utilisation and control of electric power. It is possible that registration or licensing will be required.
      `,
      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: `•	233311 Electrical Engineer `,

      exceptionstitle: "Exceptions for Unit Group 2332.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],
      requirementtitle: `English Requirement`,
      requirement: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
        
`,
      ],
      languagetitle: "",
      language: "",

      tasktitle: [
        "Electrical Engineers  are responsible for the following tasks:",
      ],
      tasks: [
        `Electrical engineers plan and design power generating equipment and power stations to utilize generated electric power.
`,
        `Electrical engineers determine the efficient type and arrangement of circuits, transformers, circuit-breakers, transmission lines and other equipment.
`,
        `Electrical engineers work to innovate and invent components, equipment and appliances to generate and utilize electric power.
`,
        `Electrical engineersinterpret specifications, drawings, standards and regulations relating to electric power equipment and its use.
`,
        `Resources used in the supply of electrical components, machines, appliances and equipment are organized and managed by electric engineers.
`,
        `Electrical engineers establish delivery and installation schedules for machines, switchgear, cables and fittings.
`,
        `Operation and maintenance of power stations are the responsibility of electrical engineers.
`,
        `Electrical engineers supervise the operation of generation, transmission and distribution from industrial electric plants.
`,
        `Electrical engineers design, install and control signalling equipment for road, rail and air traffic.
`,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    electronicsEngineer: {
      title: `ANZSCO 233411-Electronics Engineer.`,
      titleDescription: `Electronic engineer develops and maintains electronic components and system used in communication and warfare systems with various other industrial applications. Electronic engineers develop, design, install and test electronic circuits and systems used in computer, command, entertainment, transport, and other industrial sectors. Registration or licensing may be required.`,
      image: `/images/SpecificAnzsco/elctronicsEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Civil Engineer:`,
      thirdDescription: `Airfield Engineer Officer (Air Force)
      Hydraulics Engineer
      `,
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],
      unitTitle: `Unit Group 2334: Electronics Engineers.`,
      unitDescription: `Electronic engineers develop, design, install and test electronic circuits and systems used in computer, command, entertainment, transport, and other industrial sectors.Electronic engineer develops and maintains electronic components and system used in communication and warfare systems with various other industrial applications. Registration or licensing may be required.`,
      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: "•	233411 Electronics Engineer.",

      exceptionstitle: "Exceptions for Unit Group 2334.",
      exceptions: [
        `	Australian Graduate exceptions apply in some states/territories
      `,
        `	Priority Skilled Lists may apply a specific requirement in some states
      `,
        `	Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],
      requirementtitle: `Language proficiency to be eligible for Electronics Engineer`,
      requirement: [
        `	IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `	OET result with a minimum grade B in all sections;
        `,
        `	TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `	PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
        
`,
      ],

      tasktitle: [
        "Electronics Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `	Electronic engineers develop, design, install and test electronic circuits and systems used in computer, command, entertainment, transport, and other industrial sectors.
`,
        `	Electronic engineers develop, design, install and test electronic circuits and systems used in computer, command, entertainment, transport, and other industrial sectors.
`,
        `	Electronic engineers designespecially embedded software to be used within electronic systems.
`,
        `	Electronic engineers develop procedures to test electronic components, circuits and systems.
`,
        `	Electronic engineers ensure proper control and protection by supervising computer, communication, and control systems' installation and commissioning.
`,
        `	Electronic engineers monitor performance and safety standards.
`,
        `	Electronic engineers establish procedures for operating, modifying, maintaining, and repairingsuch systems.
`,
        `	Based on wired optical fibre and wireless communication media, electronic engineers design communications bearers.
`,
        `	Electronic engineers determine the type of installation, location, layout and transmission medium for communication analysing communication traffic and level of service.
`,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    industrialEngineer: {
      title: `ANZSCO 233511-Industrial Engineer`,
      titleDescription: `Industrial engineers  establish  practices  to  recommend  improvement  in  commercial quality and efficiency of commercial production in an industrial environment. Industrial engineer  reviews  and  investigates the utilisationof  personnel  and  logistics’  current operational  process.   Industrial  engineers  determine the materials  and  equipment required to constructplantsand equipment.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/industrialEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Civil Engineer:`,
      thirdDescription: [
        `•Engineering Assurance Engineer`,
        `•Integrated Logistics Support Engineer`,
        `•Process Engineer (Industrial)
      `,
      ],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
          `,
        `482 TSS Visa Medium Term List
          `,
        `407 Training visa occupations List
          `,
        `482 TSS Visa Regional Occupation List
          `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
          `,
        `190 State/Territory Sponsored
          `,
        `186 ENS Visa Occupations List
          `,
        `187 RSMS Visa Occupations List
          `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
          `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
          `,
      ],

      notoccuoationtitle: "Not on the Occupation Listof Industrial Engineers:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provisionfor Industrial Engineer",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2332: Civil Engineering Professionals.`,
      unitDescription: `Industrial,  Mechanical  and  Production  Engineers  are involvedinthe construction, operation,  logistics  and maintenance  of  mechanical  and  process  plants.Industrial, Mechanical  and  Production  Engineers  ensure  the usageof  resources  is  cost-effective.Industrial,  Mechanical  and  Production  Engineer,installs  and  establishes  programs to coordinatemanufacturing activities. Registration or licensing may be required.`,
      skillleveltitle: "Skill Levelrequired for Industrial Engineer.",
      skilllevel:
        "Most  occupations  in  this  unit  group  have  a skill  levelcommensurate  with  a bachelor’sdegree or higher qualification. At least five years of relevant experience and/or relevant vendor  certification  may  substitute  for  the  formal  qualification.  In  some  instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233511 Industrial Engineer.
          <br />
          • 233512 Mechanical Engineer
          <br />
          • 233513 Production or Plant Engineer.
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2335",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
          `,
        `Priority Skilled Lists may apply a specific requirement in some states
          `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.

          `,
      ],

      languagetitle: "Language proficiency required for Civil Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
    `,
        `OET result with a minimum grade B in all sections;
    `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
    `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
    `,
      ],

      tasktitle: [
        "Industrial Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `Industrial engineers carry out inspections to ensure optimum performance.`,
        `Industrial engineers direct the maintenance and coordinate the requirementsfor new designs,surveys and schedules.`,
        `Industrial engineers develop specifications for the manufacture of products in the industry.`,
        `Industrial engineers determine materials and equipment required to constructplant and equipment.`,
        `Industrial engineers use various methods of material flow, piping and check capacities and layout plan for the construction and operation of industrial plants andsystems.`,
        `Industrial Engineer establishes standards and policies based on engineering principles and safety regulationsfor installation, modification, quality control, testingand maintenance of industrial plants and systems.`,
        `Delivery of materials, plantsand equipment is organisedand managed by industrial engineers.`,
        `Industrial engineer manages project labour in industry.`,
        `To determine the functions and responsibilities of workers and work units, industrial engineers developfunctional statementsand organisational charts.`,
        `Industrial engineerreviews project information, functional statementsand organisation to identify areas of duplication.`,
        `To develop labour utilisation standards, industrial engineers establishwork measurement programs and analysework samples.`,
        `To determine optimum worker and equipment efficiencies,industrial engineers analyseworkforce utilisation, facility layout, operational data and production schedules.`,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    mechanicalEngineer: {
      title: `ANZSCO 233512-Mechanical Engineer`,
      titleDescription: `Mechanical   engineers   plan   the   assembly   of   different   systems   required   for   the commissioning   of   mechanical   process   plants.   Mechanical   engineer   designs   and supervises  the  assembly,  erection,  operation  and  maintenance  of  mechanical  and process plants and installations.It is possible that registration or licensing will be required`,
      image: `/images/SpecificAnzsco/mechanicalEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Civil Engineer:`,
      thirdDescription: [
        `•Airconditioning Engineer`,
        `•Building Services Engineer`,
        `•Heating and Ventilation Engineer`,
      ],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle: "Not on the Occupation Listof Industrial Engineers:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provisionfor Industrial Engineer",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2335: Industrial Mechanical and ProductionEngineers.`,
      unitDescription: `Industrial, Mechanical and Production Engineers are involvedinthe construction, operation, logistics and maintenance of mechanical and process plants. Industrial, Mechanical and Production Engineers ensure the usage of resources is cost-effective.Industrial, Mechanical and Production Engineer, installs and establishes programs to coordinate manufacturing activities. Registration or licensing may be required.`,

      skillleveltitle: "Skill Level required for Mechanical Engineer.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233511 Industrial Engineer.
          <br />
          • 233512 Mechanical Engineer
          <br />
          • 233513 Production or Plant Engineer.
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2335",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle: "Language proficiency required for Civil Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Mechanical Engineers  are responsible for the following tasks:",
      ],
      tasks: [
        `Mechanical engineers determine the function and responsibility of workers by reviewing functional statements, organizational charts and project information to identify areas of duplication.
`,
        `Mechanical engineers establish work measurement programs and analyse work samples to develop standards for labour utilization.
`,
        `Mechanical engineers analyse workforce utilisation, operational data and production schedules to determine optimum worker efficiencies.
`,
        `To determine optimum equipment efficiencies mechanical engineers analyse facility layout, operational data and production cost.
`,
        `Mechanical equipment is designed by mechanical engineers used for the construction of plats and systems.
`,
        `Mechanical engineers design components of machines and manufacturing products for the construction of plants and systems.
`,
        `Mechanical engineers develop specifications for the manufacture and determining materials, equipment, piping, material flows, capacities and layout of plant construction and systems.
`,
        `Mechanical engineersestablish standards and policies based on engineering principles and safety regulationsfor installation, modification, quality control, testing and maintenance of industrial plants and systems.
`,
        `To maintain optimum performance mechanical engineers, carry out regular inspections.
`,
        `Mechanical engineers direct the maintenance and coordinate requirements for new designs, surveys and maintenance schedules.
 `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    plantEngineer: {
      title: `ANZSCO 233513-Production or Plant Engineer.`,
      titleDescription: `Production or Plant engineers plan and manage manufacturing activities. Production or plant  engineers  plan  and  design  the  construction  of  equipment  and  machines  in industrial plants. Production or plant engineers coordinate the design, modification and continued  performance  of  equipment  and appliancesin  industrial  plants.It  is  possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/plantEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Plant Engineer:`,
      thirdDescription: [
        `Automation and Control Enginee`,
        `Maintenance Engineer (Shipbuilding)`,
      ],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle: "Not on the Occupation Listof Plant Engineers:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Plant Engineer",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2335: IndustrialMechanical and ProductionEngineers.`,
      unitDescription: `Industrial, Mechanical and Production Engineers are involvedinthe construction, operation, logistics and maintenance of mechanical and process plants. Industrial, Mechanical and Production Engineers ensure the usage of resources is cost-effective.Industrial, Mechanical and Production Engineer, installs and establishes programs to coordinate manufacturing activities. Registration or licensing may be required.`,

      skillleveltitle:
        "Skill Level required for Production or Plant Engineer..",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233511 Industrial Engineer.
          <br />
          • 233512 Mechanical Engineer
          <br />
          • 233513 Production or Plant Engineer.
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2335",
      exceptions: [
        `	Australian Graduate exceptions apply in some states/territories
      `,
        `	Priority Skilled Lists may apply a specific requirement in some states
      `,
        `	Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle: "Language proficiency required for Plant Engineer.",
      language: [
        `	IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `	OET result with a minimum grade B in all sections;
`,
        `	TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `	PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Production or Plant Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `	Production or Plant engineers develop and review functional statements, organisational charts and project information to determine functions and responsibilities of workers and work units to identify areas of duplication.
`,
        `	Product or Plant engineers establish work measurement programs and analyse work samples to develop standards for labourutilisation.
`,
        `	Production or Plant engineers analyseworkforce utilisation, operational data, production schedules, and costs to determine optimum worker efficiencies.
`,
        `	Production or Plant engineers analysefacility layout, operational data and productioncoststo determine optimumequipment efficiencies.
`,
        `	analysing workforce utilisation, facility layout, operational data and production schedules and costs to determine optimum worker and equipment efficiencies
`,
        `	Production or Plant engineers develop specifications for the manufacture 
`,
        `	Production or Plant engineers determine materials, equipment, piping, material flows, capacities and layout of plant construction and systems.
`,
        `	Production or Plant engineersmanage project labour and the delivery of materials, plant and equipment
`,
        `	Production or Plant engineers establish standards and policies for installation, modification, quality control, testing, inspection and maintenance according to engineering principles and safety regulations.
`,
        `	Production or Plant engineers carry out inspections to maintain optimum performance.
 `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    miningEngineer: {
      title: `ANZSCO 233611-Mining Engineer  (Excluding Petroleum).`,
      titleDescription: `Mining Engineer plans and directs the engineering aspects of locating and extracting minerals from the earth. Mining Engineersplan and coordinate the engineering elements of mineral exploration and extraction from the earth. Mining engineers plan and direct the engineering elements of identifying and extractingmineralsfromthe ground.
      Mining Engineers undertake preliminary surveys of mineral, petroleum, and natural gas deposits with prospectors, geologists, geophysicists, other mineral scientists, and engineers to identify the available resources. It is possible that registration or licensing will be required.
      `,
      image: `/images/SpecificAnzsco/miningEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Mining Engineer:`,
      thirdDescription: [`Process Engineer (Mining)`],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle: "Not on the Occupation Listof Mining Engineer:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Mining Engineer:",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2336: Mining Engineers.`,
      unitDescription: `Plans and directs the engineering aspects of locating and extracting minerals from the earth. Mining engineers locate and extract minerals from the earth. Mining Engineersplan and coordinate the engineering elements of mineral exploration and extraction from the earth. Mining engineers plan and direct the engineering elements of identifying and extracting minerals from the ground. It is possible that registration or licensing will be required. They also undertake preliminary surveys of mineral, petroleum, and natural gas deposits with prospectors, geologists, geophysicists, other mineral scientists, and engineers to identify the available resources. It is possible that registration or licensing will be required.

      `,

      skillleveltitle:
        "Skill Level required for Production or Mining Engineer.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233611 Mining Engineer (excluding Petroleum)
          <br />• 233612 Petroleum Engineer.
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2336",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle: "Language proficiency required for Mining Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Mining Engineers (Excluding Petroleum)  are responsible for the following tasks:",
      ],
      tasks: [
        `Managing maintenance requirements tomaximise efficiency.
        `,
        `Engineering strategies, policies, and plans must be developed, implemented, and monitored.
       `,
        `Assuring compliance with specifications and plans and laws, regulations, and safety requirements.
       `,
        `Interpreting plans, drawings, and specifications and advising on engineering processes and procedures to meet construction and production goals.
       `,
        `It is possible to contribute to research and development initiatives.
       `,
        `Creating project timelines and budgets.
       `,
        `Ensuring that engineering quality, cost, safety, timeliness, and performance criteria are met.
        
 `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    petroleumEngineer: {
      title: `ANZSCO 233612-Petroleum Engineer`,
      titleDescription: `Petroleum  engineers  develop  and  implement  plans to  control  engineering  aspects  of obtaining  petroleum  or  natural  gas  from  the  earth. Petroleum  engineers  locate  and extract petroleum matter from the earth.Petroleum engineers develop strategies and supervise technical elements of identifying and extracting natural gas from the earth. Petroleum  engineers  assist  in  the  preparation  of operationsand  estimate  project  cost. Petroleum  engineers  report  the  progress  of  the engineering  project.Registration  or licensing of the related fields will probably be required.`,
      image: `/images/SpecificAnzsco/petroleumEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Petroleum Engineer:`,
      thirdDescription: [
        `Mud Engineer
        `,
        `Petrophysical Engineer`,
      ],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle: "Not on the Occupation List of Petroleum Engineer:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Petroleum Engineers:",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2336: Mining Engineers.`,
      unitDescription: `Plans and directs the engineering aspects of locating and extracting minerals from the earth. Mining engineers locate and extract minerals from the earth. Mining Engineersplan and coordinate the engineering elements of mineral exploration and extraction from the earth. Mining engineers plan and direct the engineering elements of identifying and extracting minerals from the ground. It is possible that registration or licensing will be required. They also undertake preliminary surveys of mineral, petroleum, and natural gas deposits with prospectors, geologists, geophysicists, other mineral scientists, and engineers to identify the available resources. It is possible that registration or licensing will be required.

      `,

      skillleveltitle:
        "Skill Level required for Production or Petroleum Engineer",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233611 Mining Engineer (excluding Petroleum)
          <br />• 233612 Petroleum Engineer.
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2336",
      exceptions: [
        `		Australian Graduate exceptions apply in some states/territories
      `,
        `	Priority Skilled Lists may apply a specific requirement in some states
      `,
        `	Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle: "Language proficiency required for Petroleum Engineer.",
      language: [
        `	IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `	OET result with a minimum grade B in all sections;
`,
        `	TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `	PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Petroleum Engineersare responsible for the following tasks:",
      ],
      tasks: [
        `	Perform preliminary surveys of mineral, petroleum, and natural gas reserves with prospectors, geologists, geophysicists, and other mineral researchers, including engineers, to evaluate the resources available, the viability of collecting the funds, and the design and implementation of the extraction process.
       `,
        ` 	Create operationally and project estimated costs and production plans and track progress, productivity, and budget costs.
       `,
        ` 	Identify the most acceptable ore extraction methods, considering all such criteria as the depth of overburden and attitudinal and physical properties of deposits and adjacent stratum.
       `,
        ` 	Creating blueprints for tunnels and chambers, locating and building mine shafts, laying out mine development, and employing suitable mining procedures, frequently using computer simulations.
       `,
        ` 	Evaluate the environmental, technological, economic, and security hazards involved with the development project, construction, and operation phases.
       `,
        ` 	Evaluate the security of procedures, the sequence of extraction, and the security of mine walls, assessing the danger of slippage and advising on slippage and rockfall prevention.
       `,
        ` 	Plan & coordinate labour and equipment used by efficient objectives, legislation, safety requirements, and environmental circumstances.
       `,
        ` 	Plan and perform research and provide engineering guidance on petroleum and natural gas exploration, localisation, and extraction activities.
       `,
        ` 	Choose a spot for drilling.
       `,
        ` 	Choose on types of derricks and equipment, including seabed platforms.
       `,
        ` 	Create technologies to regulate the supply of gas through wells.
        
        
        
        
 `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    aeronauticalEngineer: {
      title: `ANZSCO 233911-Aeronautical Engineer.`,
      titleDescription: `Aeronautical Engineer performs engineering work concerned with the design and development of aircraft for flight. Aeronautical engineers design propulsion systems and study the aerodynamic performance of aircraft and construction materials used for the manufacture of aircraft for flight. Aeronautical engineers are responsible for the maintenance of aircraft before flight.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/aeronauticalEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Aeronautical Engineer:`,
      thirdDescription: [
        `	Aeronautical Engineering Officer (Navy)`,
        `	Aerospace Engineer`,
        `	Aerospace Engineer Officer - Aeronautical (Air Force)`,
        `	Aerospace Engineer Officer - Armament (Air Force)`,
        `	Aerospace Engineer Officer - Electronics (Air Force)`,
        `	Avionics Systems Engineer`,
        `	Weapons Aeronautical Engineering Officer (Navy)`,
      ],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Aeronautical Engineers::",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Aeronautical Engineer",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2339: Other Engineering Professionals.`,
      unitDescription: `Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical EngineersAgricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers.It is possible that registration or licensing will be required`,

      skillleveltitle: "Skill Level required for Aeronautical Engineer..",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233911 Aeronautical Engineer.
          <br />
          • 233912 Agricultural Engineer
          <br />
          • 233913 Biomedical Engineer
          <br />
          • 233914 Engineering Technologist
          <br />
          • 233915 Environmental Engineer
          <br />
          • 233916 Naval Architect / Marine Designer
          <br />
          • 233999 Engineering Professionals nec
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2335",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle: "Language proficiency required for Aeronautical Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Aeronautical Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `Aeronautical engineers prepare designs for aeronautical process systems.
`,
        `Aeronautical engineers remove and separate components affecting aeronautical changes.
`,
        `Aeronautical engineers test and evaluate fuels, transferring heat.
`,
        `To achieve maximum efficiency under safe operating conditions,Aeronautical engineers control the store of solids, liquids and gases.
`,
        `Aeronautical engineers ensure proper use and utilisation of material and equipment.
`,
        `Aeronautical engineers implement corrective action by researching product usage and pollution control concerns.
`,
        `Aeronautical engineers ensure materials and equipment meet the requirements of troubleshooting failures in aeronautical facilities.
`,
        `Aeronautical engineers analyse new product plans based on design standards and considerations such as strength, weight, and cost.
`,
        `Aeronautical engineers make material selection suggestionsdesign standards and considerations such as strength, weight, and cost.
 `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    agriculturalEngineer: {
      title: `ANZSCO 233912-Agriculture Engineer.`,
      titleDescription: `Agricultural engineers work for the development of agricultural production and processing. Agricultural engineers perform and supervise engineering work related to the use and development of agricultural land and equipment.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/agriculturalEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Alternative Title of Agricultural Engineer:`,
      thirdDescription: [`Natural Resources Engineer`],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle: "Not on the Occupation List of Agriculture Engineer:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Agriculture Engineer",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2339: Other Engineering Professionals.`,
      unitDescription: `Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical EngineersAgricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers.It is possible that registration or licensing will be required`,

      skillleveltitle: "Skill Level required for Agriculture Engineer.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233911 Aeronautical Engineer.
          <br />
          • 233912 Agricultural Engineer
          <br />
          • 233913 Biomedical Engineer
          <br />
          • 233914 Engineering Technologist
          <br />
          • 233915 Environmental Engineer
          <br />
          • 233916 Naval Architect / Marine Designer
          <br />
          • 233999 Engineering Professionals nec
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2335",
      exceptions: [
        `	Australian Graduate exceptions apply in some states/territories
      `,
        `	Priority Skilled Lists may apply a specific requirement in some states
      `,
        `	Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle: "Language proficiency required for Agriculture Engineer.",
      language: [
        `	IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `	OET result with a minimum grade B in all sections;
`,
        `	TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `	PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Agriculture Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `	Agricultural engineers design, develop and direct the production of mechanical equipment used on a farm.
`,
        `	Agricultural engineers create plans for the construction of farm buildings and equipment.
`,
        `	Agricultural engineerssupervise agricultural processing plants, animal systems and animal production systems.
`,
        `	Agricultural engineers plan and design irrigation systems, food control systems and drainage systems.
`,
        `	Agricultural engineers design and supervise the installation of numerous pieces of equipment and instruments required to process and analyse diverse farm goods.
`,
        `	Agricultural engineers investigatenumerous environmental facts such as humidity, temperature, pressure, light, animals, plants, or the use of various pesticides.
 `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    biomedicalEngineer: {
      title: `ANZSCO 233913-Biomedical Engineer`,
      titleDescription: `Biomedical  engineers  develop  equipment  for  improving  human  health.  Biomedical engineers focus on advancements in technology and medicine to createnew devices for  the  betterment  of  human  health.  Biomedical  engineers  apply  the  knowledge  and methodology of physics, engineering, mathematics, computing, and material science to treat  and  preventhuman  disease.It  is  possible  that  registration  or  licensing  will  be required.`,
      image: `/images/SpecificAnzsco/biomedicalEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specializations of Agriculture Engineer:`,
      thirdDescription: [
        `Bioengineer`,
        `Clinical Engineer`,
        `Medical Engineer`,
      ],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Bio-medical Engineer.:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Bio-medical Engineer.",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2339: Other Engineering Professionals.`,
      unitDescription: `Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical EngineersAgricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers.It is possible that registration or licensing will be required`,

      skillleveltitle: "Skill Level required for Bio-medical Engineer..",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233911 Aeronautical Engineer.
          <br />
          • 233912 Agricultural Engineer
          <br />
          • 233913 Biomedical Engineer
          <br />
          • 233914 Engineering Technologist
          <br />
          • 233915 Environmental Engineer
          <br />
          • 233916 Naval Architect / Marine Designer
          <br />
          • 233999 Engineering Professionals nec
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2335",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle: "Language proficiency required for Civil Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Bio-medical Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `Biomedical engineers design and develop different medical instruments for measuring physical patterns affecting patients, particularly those in intensive care units or having surgery.
`,
        `Biomedical engineers are responsible for Bio-electrical examination of the brain and heart.
`,
        `Biomedical engineers have a solid understanding of mechanics to study the human musculoskeletal system and construct supporting devices to aid inpatient rehabilitation.
`,
        `Biomedical engineers create artificial organs and innovative implantable materials.
`,
        `Biomedical engineers investigate and developvarious medicinal applications for electromagnetic and ultrasonic radiation.
`,
        `Biomedical engineers create novel medical instruments or gadgets, such as sensors and therapeutic or diagnostic devices.
 `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    materialsEngineer: {
      title: `ANZSCO 233112-Materials Engineer.`,
      titleDescription: `Materials engineers design chemical process systems for processes such as removing and separating components, effecting chemical changes, transferring heat, transferring heat, testing and evaluating fuels. Materials engineers communicate with material manufacturers during the discovery and assessment of materials appropriate for specific product applications. It is possible that registration or licensing will be required. `,
      image: `/images/SpecificAnzsco/biomedicalEngineer.png`,
      skillTitle: `Skill level for Materials Engineer:`,
      skillDescription: `Level 1 or Equivalent.`,
      secondTitle: `Skill Assessment Authority of Materials Engineer`,
      secondDescription: `EA (Engineers Australia) / AIM`,

      occupationTitle: `On the Occupation List of Materials Engineer:`,
      occupationList: [
        `489 (S/T) Occupations List
        `,
        `482 TSS Visa Medium Term List
        `,
        `407 Training visa occupations List
        `,
        `482 TSS Visa Regional Occupation List
        `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
        `,
        `190 State/Territory Sponsored 
        `,
        `186 ENS Visa Occupations List
        `,
        `187 RSMS Visa Occupations List
        `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
        `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
        
      `,
      ],

      notoccuoationtitle: "Not on the Occupation List of Materials Engineers",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Materials Engineer",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.",

      unitTitle: `Unit Group 2331: Chemical and Material Engineers.`,
      unitDescription: `Chemical and Materials Engineers play an essential role in designing and preparing specifications for chemical process systems. Engineers are also responsible for constructing and operating commercial-scale chemical plants and supervising industrial processing and fabrication of products undergoing physical and chemical change.

      Another function of Chemical and Materials Engineers is to explore the characteristics of metals, ceramics, polymers, and other materials and evaluate and develop their technical and commercial applications.
      `,

      skillleveltitle: "Skill Level required for Materials Engineer",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • Chemical engineer ANZSCO code 233111
          <br />
          • Material Engineer ANZSCO code 233112
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2331",
      exceptions: [
        `	Australian Graduate exceptions apply in some states/territories
        `,
        `Priority Skilled Lists may apply a specific requirement in some states
        `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
        
      `,
      ],

      languagetitle:
        "Required level of Language proficiency for Materials Engineer",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
        
`,
      ],

      tasktitle: [
        "Materials Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `Materials engineers monitor equipment operation and maintenance to ensure optimal efficiency under safe operating conditions.
        `,
        `Materials engineers design chemical process systems for processes such as removing and separating components, effecting chemical changes, transferring heat, transferring heat, testing and evaluating fuels. 
        `,
        `Materials engineers develop control systems for controlling the storage and handling of solids, liquids, and gases.
        `,
        `Materials engineers communicate with material manufacturers during the discovery and assessment of materials appropriate for specific product applications.
        `,
        `Materials engineers identify and correct flaws in chemical plants researching product utilization and pollution control issues.
        `,
        `Material engineers plan and carry out laboratory activities to create new materials and fabrication techniques for new materials in order to meet manufacturing cost and performance specifications
        `,
        `Material engineers assess new product concepts and propose material choices.
        `,
        `Material engineers make suggestions based on design standards and characteristics such as weight, strength and cost
        
 `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    engineeringTechnologist: {
      title: `ANZSCO 233914-Engineering Technologist`,
      titleDescription: `Engineering technologists analyse and modify existing technology to create and test other engineering projects. Engineering technologist adjusts existing engineering technologies to apply them in the testing and implementation of engineering projects.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/engineeringTechnologist.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Alternative Title of Agriculture Engineer:`,
      thirdDescription: [
        `• Bioengineer`,
        `• Clinical Engineer`,
        `• Medical Engineer`,
      ],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Aeronautical Engineers::",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Aeronautical Engineer",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2339: Other Engineering Professionals.`,
      unitDescription: `Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical EngineersAgricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers.It is possible that registration or licensing will be required`,

      skillleveltitle: "Skill Level required for Agriculture Engineer.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233911 Aeronautical Engineer.
          <br />
          • 233912 Agricultural Engineer
          <br />
          • 233913 Biomedical Engineer
          <br />
          • 233914 Engineering Technologist
          <br />
          • 233915 Environmental Engineer
          <br />
          • 233916 Naval Architect / Marine Designer
          <br />
          • 233999 Engineering Professionals nec
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2339",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle: "Language proficiency required for Civil Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Engineering Technologistsare responsible for the following tasks:",
      ],
      tasks: [
        `Engineering technologists inspect the plans to ensure optimum performance.
`,
        `Engineering technologists develop regulations for the installation of equipment in industries.
`,
        `Engineering technologists develop standards and regulations fortesting, modification, development, quality, control, tracking, maintenance, and inspection.
`,
        `The pans are scheduled, and the engineering technologists detail the manufacturing operations.
`,
        `Engineering technologists prepare the contractors and pre-specify the plan's construction and facility purchases.
`,
        `Engineering technologists assist withany plan in building and equipment plans for collaborating with management needs in creating new surveys, items, and planned maintenances.
 `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    environmentalEngineer: {
      title: `ANZSCO 233915-Environmental Engineer`,
      titleDescription: `Environmental engineers assess the impact on air, water, soil and noise in the vicinity of engineering projects. Environmental engineers design equipment for the treatment and safe disposal of waste materials. Environmental engineers assess the cause of long-term ecological problems.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/environmentalEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: ``,
      thirdDescription: [""],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Environmental Engineers::",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Environmental Engineer",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2339: Other Environmental Engineers.`,
      unitDescription: `This unit group covers Engineering Professionals not elsewhere classified. It includes Aeronautical Engineers, Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. Registration or licensing may be required`,
      skillleveltitle: "Skill Level required for Environmental Engineer.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 233911 Aeronautical Engineer.
          <br />
          • 233912 Agricultural Engineer
          <br />
          • 233913 Biomedical Engineer
          <br />
          • 233914 Engineering Technologist
          <br />
          • 233915 Environmental Engineer
          <br />
          • 233916 Naval Architect / Marine Designer
          <br />
          • 233999 Engineering Professionals nec
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2339.",
      exceptions: [
        `	Australian Graduate exceptions apply in some states/territories
      `,
        `	Priority Skilled Lists may apply a specific requirement in some states
      `,
        `	Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle:
        "Language proficiency required for Environmental Engineer.",
      language: [
        `	IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `	OET result with a minimum grade B in all sections;
`,
        `	TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `	PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Environmental Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `	Environmental engineers Inspect the plans to ensure optimum performance.
        `,
        `	Engineering technologists develop regulations for the installation of equipment in industries.
        `,
        `	Environmental engineers develop standards and regulations for testing, modification, development, quality, control, tracking, maintenance, and inspection.
        `,
        `	Environmental engineers schedule pans and manufacturing operations. 
        `,
        `	Environmental engineers prepare the contractors and pre-specification for the plan's construction and facility purchases.
        `,
        `	Environmental engineers assist in planning buildings and equipment to collaborate with management needs in creating new surveys, items, and maintenances.
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    engineeringProfessionals: {
      title: `ANZSCO 233999-Engineering Professionals`,
      titleDescription: `The engineering professionals group covers occupations of engineers not elsewhere classified by ANZSCO. It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/engineeringProfessionals.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: ``,
      thirdDescription: [""],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Engineering Professionals :",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Engineering Professionals",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2339: Other Engineering Professionals.`,
      unitDescription: `This unit group covers Engineering Professionals not elsewhere classified. It includes Aeronautical Engineers, Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. Registration or licensing may be required`,
      skillleveltitle: "Skill Level required for Engineering Professionals.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • Acoustic Engineer
          <br />
          • Calibration Engineer
          <br />
          • Corrosion Engineer
          <br />
          • Fire Safety Engineer
          <br />
          • Mechatronics Engineer
          <br />
          • Product Design Engineer
          <br />
          • Safety Engineer
          <br />
          • Test and Activation Engineer (Naval Shipbuilding)
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2339.",
      exceptions: [
        `	Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle:
        "Language proficiency required for Environmental Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Engineering Professionals are responsible for the following tasks:",
      ],
      tasks: [
        `Engineering professionals design, fabricate, develop and execute the engineering projects.
        `,
        `Engineering professionals are responsible for allotting the work assignments to the supervisors and the subordinates.
        `,
        `Engineering professionals take quick actions for fast executions.
        `,
        `Engineering professionals provide regular updates of the work to higher management.
        `,
        `Engineering professionals submit the assessment and reports regularly.
        `,
        `Engineering professional controls, coordinate and direct all the resources available for engineering projects.
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    computerEngineer: {
      title: `ANZSCO 263111-Computer Network and Systems Engineer`,
      titleDescription: `Computer Network and System engineers analyse and evaluate data models and diagrams in the integration of computer systems.Computer Network and System engineer makes recommendations for improvement in network operations.Computer Network and System engineer evaluates and suggests network and integrated hardware, software and operating system enhancements.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/computerEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Computer Network and Systems Engineer:`,
      thirdDescription: [
        `•	Computer Network Engineer
       `,
        `•	Computer Systems Integrator`,
      ],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Computer Network and Systems Engineer :",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle:
        "Visa Provision for Computer Network and Systems Engineer:",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2631: Computer Network Professionals.`,
      unitDescription: `In the construction and configuration of computer systems, Computer Network Professionals understand, evaluate and create difficult system design and architectural requirements.Computer Network Professionalsensure networks run at peak performance by monitoring and analysing network infrastructure. Computer Network Professionals ensure that networks are set up properly.Computer Network Professionals offers specialized help for network issues and emergencies. It is possible that registration or licensing will be required.`,
      skillleveltitle:
        "Skill Level required for Computer Network and Systems Engineer",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 263111 Computer Network and Systems Engineer
          <br />
          • 263112 Network Administrator
          <br />
          • 263113 Network Analyst
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2631.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle:
        "Language proficiency required for Computer Network and Systems Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Computer Network and Systems Engineerare responsible for the following tasks:",
      ],
      tasks: [
        `In the construction and configuration of computer systems Computer Network and systems engineers understand, evaluate and create difficult system design and architectural requirements.
       `,
        `Computer Network and System engineer analyse and evaluates data models and diagrams in the integration of computer systems.
        `,
        `Computer Network and System engineer assess network operations and integrates hardware, software, and communications. 
       `,
        `Computer Network and System engineer makes recommendations for improvement in network operations.
        `,
        `Computer Network and System engineersstudy and evaluate network infrastructure to set up networks.
        `,
        `Computer Network and System engineer ensures networks run at peak performance by monitoring and analysing network infrastructure. 
        `,
        `Computer Network and System engineer offers specialized help for network issues and emergencies.
        `,
        `Computer Network and System engineersensure that networks are set up properly.
        `,
        `Computer Network and System engineers investigate, analyse and monitor network infrastructure.
        `,
        `Computer Network and System engineer evaluates and suggests network and integrated hardware, software and operating system enhancements.
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    telecommunicationsEngineer: {
      title: `ANZSCO 263311-Telecommunications Engineers`,
      titleDescription: `Computer Network and System engineers analyse and evaluate data models and diagrams in the integration of computer systems.Computer Network and System engineer makes recommendations for improvement in network operations.Computer Network and System engineer evaluates and suggests network and integrated hardware, software and operating system enhancements.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/telecommunicationsEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Telecommunication Engineer:
      
      `,
      thirdDescription: [
        `•	Signals Officer (Army) (NZ)
       `,
        `•	Computer Systems Integrator`,
      ],
      occupationTitle: `On the Occupation Lists`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Telecommunications Engineering Professionals. :",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle:
        "Visa Provision for Telecommunications Engineering Professionals.:",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2633:Telecommunications Engineering Professionals.`,
      unitDescription: `Telecommunications Engineering Professionals select optimal telecommunications hardware and software configurations to ensure telecommunications equipment performs as expected.To minimize and avoid present and prospective problems telecommunication engineering professionalsstudy and analyse interruption, intelligibility, and clarification. Registration or licensing may be required.`,
      skillleveltitle: "Skill Level required for Telecommunications Engineers.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 263311 Telecommunications Engineer.
          <br />
          • 263312 Telecommunications Network Engineer.
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2631.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle:
        "Language proficiency to be eligible for Telecommunications Engineers.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Telecommunications Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `Telecommunications engineers work to find and choose new telecommunications sites.
      `,
        `Telecommunication engineers prepare permission documents and submit the paperwork.
       `,
        `Telecommunication engineers design building plans and the resultant approval are all steps in the process.
       `,
        `Telecommunications engineers use rules, regulations, policies and procedures to ensure uniformity in the supply of telecommunication networks.
      `,
        `Telecommunications engineers plan, install and configure the satellite and digital data system to ensure the interconnection of telecommunication systems. 
      `,
        `Telecommunication engineers ensure the interconnection of telecommunications systems with equipment from various vendors, service providers and users.
      `,
        `Telecommunication engineers compile engineering project proposals to establish priorities.
      `,
        `Telecommunication engineers define scope, meaning and requirements to determine the cost of equipment, materials and services.
      `,
        `Telecommunication engineers evaluate buying new products and services from manufacturers.
      `,
        `Telecommunication engineers prepare and analyse drawings for the use of telecommunication systems.
      `,
        `Telecommunication engineers prepare standard drawings and regulations for the usage of telecommunications equipment.
      `,
        `Telecommunication engineers determine appropriate telecommunications hardware and software standards, to ensure the necessary efficiency of telecommunications.
      `,
        `Telecommunication engineers identify and analyse modern telecommunications network difficulties and demand. 
      `,
        `To minimize and avoid present and prospective problems telecommunication engineers study and analyse interruption, intelligibility, and clarification. 
         `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    telecommunicationsnetworkEngineer: {
      title: `ANZSCO 263312-Telecommunications Network Engineers.`,
      titleDescription: `Telecommunications  Network  Engineers  improve  communications  by  identifying  and assessing    problems    and    demands    of    existing    telecommunications    systems.Telecommunications Network Engineers determine the most acceptable techniques to eliminate difficulties.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/telecommunicationsnetworkEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Alternative Titles:
      
      `,
      thirdDescription: [
        `Communications Consultant
       `,
        `Communications Specialist (ICT)
       `,
        `Telecommunications Consultant
       `,
        `Telecommunications Specialist`,
      ],
      occupationTitle: `On the Occupation List of Telecommunications Network Engineers:`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation Listof Telecommunications Network Engineers :",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle:
        "Visa Provision for Telecommunications Network Engineers:",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 2633:Telecommunications Engineering Professionals.`,
      unitDescription: `Telecommunications Engineering Professionals select optimal telecommunications hardware and software configurations to ensure telecommunications equipment performs as expected.To minimize and avoid present and prospective problems telecommunication engineering professionalsstudy and analyse interruption, intelligibility, and clarification. Registration or licensing may be required.`,
      skillleveltitle:
        "Skill Level required for Telecommunications Network Engineers.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 263311 Telecommunications Engineer.
          <br />
          • 263312 Telecommunications Network Engineer.
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2633.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle:
        "Language proficiency to be eligible for Telecommunications Network Engineers.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Telecommunications Network Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `Telecommunications Network Engineers determine the most acceptable techniques to eliminate difficulties.
        `,
        `Telecommunications Network Engineersimprove communications by identifying and assessing problems and demands of existing telecommunications systems
       `,
        `Telecommunications Network Engineers provide telecommunications network servicesin accordance with applicable laws, rules, policies, and procedures.
       `,
        `Telecommunications Network Engineers plan, design and configure telecommunications devices networks and digital data systems.
       `,
        `Telecommunications Network Engineers ensure telecommunications systems are interconnected with equipment from various manufacturers, service providers, and users.
       `,
        `Telecommunications Network Engineers performvendor evaluation and procurement of new products and services
       `,
        `Telecommunications Network Engineers select optimal telecommunications hardware and software configurations to ensure telecommunications equipment performs as expected.
       `,
        `Telecommunications network engineers monitorsystem hardware and software performance levels to forecast future demands, and make short- and long-term strategies for updating equipment.
       `,
        `Telecommunications network engineers discover and establish new telecommunications sites,create permission documents, draft construction plans, and follow through with approval.
       `,
        `Telecommunication network engineers develop and understand telecommunications equipment specs, drawings, and regulations.
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    civilengineeringDraftsperson: {
      title: `ANZSCO 312211-Civil Engineering Draftsperson..`,
      titleDescription: `Civil Engineering Draftspersons interpret job instructions, carry out required processes, and select the appropriate equipment. Civil Engineering Draftspersons draw diagrams and tabulations for civil engineering projects such as irrigation, airports, dams, bridges, and other constructions.Civil Engineering Draftspersons performthe computation of material costs and completed works are covered by specifications, norms, and contract conditions.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/civilengineeringDraftsperson.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 2 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Civil Engineering Draftsperson:
      
      `,
      thirdDescription: [
        `Civil Engineering Design Draftsperson
       `,
        `Plumbing Engineering Draftsperson
       `,
        `Road Design Draftsperson
       `,
        `Sewage Reticulation Drafting Officer
       `,
        `Structural Engineering Drafting Officer`,
      ],
      occupationTitle: `On the Occupation List of Telecommunications Network Engineers:`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Civil Engineering Draftsperson:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision for Civil Engineering Draftsperson:",
      visaprovision:
        "Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Ticketsin this category  include Skilled  Independent  Subclass  189,  Skilled  Work  Regional  Subclass  491 and  Skilled  Nominated  Subclass  190.  Furthermore,  if  you  have  a  definite  job  offer,  you may be able to apply for severalemployer-sponsored visas.",

      unitTitle: `Unit Group 3122: Civil Engineering Draftspersons and Technicians.`,
      unitDescription: `Telecommunications Engineering Professionals select optimal telecommunications hardware and software configurations to ensure telecommunications equipment performs as expected.To minimize and avoid present and prospective problems telecommunication engineering professionalsstudy and analyse interruption, intelligibility, and clarification. Registration or licensing may be required.`,
      skillleveltitle:
        "Skill Level required for Civil Engineering Draftspersons",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 263311 Telecommunications Engineer.
          <br />
          • 263312 Telecommunications Network Engineer.
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 3122.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle:
        "Language proficiency to be eligible for Telecommunications Network Engineers.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Civil Engineering Draftspersonsare responsible for the following tasks:",
      ],
      tasks: [
        `Civil Engineering Draftspersons draw diagrams and tabulations for civil engineering projects such as irrigation, airports, dams, bridges, and other constructions.
       `,
        `Civil Engineering Draftspersonsplan, and design for civil engineering projects.
       `,
        `Civil Engineering Draftspersons inspect civil engineering works.
       `,
        `Civil Engineering Draftspersons supervise maintenance and repair.
       `,
        `Civil Engineering Draftspersons gather and analyse data for computing and getting results.
       `,
        `Civil Engineering Draftspersons interpret job instructions, carry out required processes, and selectthe appropriate equipment.
       `,
        `Civil Engineering Draftspersons performthe computation of material costs and completed works are covered by specifications, norms, and contract conditions.
       `,
        `Civil Engineering Draftspersons direct and carry outlaboratory experimentsand fieldwork 
       `,
        `Civil Engineering Draftspersons collect data for traffic surveys and conduct field.
        
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    civilengineeringTechnician: {
      title: `ANZSCO 312211-Civil Engineering Draftsperson..`,
      titleDescription: `Civil Engineering Technicians direct and carry out laboratory experiments and fieldwork. Civil Engineering Technicians collect data for traffic surveys and conduct field.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/civilengineeringTechnician.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 2 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Civil Engineering Draftsperson:
      
      `,
      thirdDescription: [
        `Civil Engineering Assistant
       `,
        `Civil Laboratory Technician
       `,
        `Road Design Draftsperson
       `,
        `Geotechnical Laboratory Technician`,
      ],
      occupationTitle: `On the Occupation Listof Civil Engineering Technician:`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Civil Engineering Technician:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision forCivil Engineering Technician:",
      visaprovision: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

        `,

      unitTitle: `Unit Group 3122:Civil Engineering Draftspersons and Technicians.`,
      unitDescription: `Civil Engineering Draftspersons and Technicians draw diagrams and tabulations for civil engineering projects such as irrigation, airports, dams, bridges, and other constructions. Civil Engineering Draftspersons and Technicians interpret job instructions, carry out required processes, and select the appropriate equipment. Civil Engineering Draftspersons and Technicians perform the computation of material costs and completed works are covered by specifications, norms, and contract conditions.It is possible that registration or licensing will be required.`,
      skillleveltitle: "Skill Level required for Civil Engineering Technician.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 263311 Telecommunications Engineer.
          <br />
          • 263312 Telecommunications Network Engineer.
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 3122.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle:
        "Language proficiency to be eligible for Civil Engineering Technician.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Civil Engineering Technicians are responsible for the following tasks:",
      ],
      tasks: [
        `Civil Engineering Technicians direct and carry out laboratory experiments and fieldwork.
       `,
        `Civil Engineering Technicians collect data for traffic surveys and conduct field.
       `,
        `Civil Engineering Technicians interpret job instructions, carry out required processes, and select the appropriate equipment.
       `,
        `Civil Engineering Technicians draw diagrams and tabulations for civil engineering projects such as irrigation, airports, dams, bridges, and other constructions.
       `,
        `Civil Engineering Technicians plan, and design for civil engineering projects.
       `,
        `Civil Engineering Technicians inspect civil engineering works.
       `,
        `Civil Engineering Technicians supervise maintenance and repair.
       `,
        `Civil Engineering Technicians gather and analyse data for computing and getting results.
       `,
        `Civil Engineering Technicians interpret job instructions, carry out required processes, and selectthe appropriate equipment.
       `,
        `Civil Engineering Technicians performthe computation of material costs and completed works are covered by specifications, norms, and contract conditions.
        
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    electricalengineeringDraftsperson: {
      title: `ANZSCO 312311-Electrical Engineering Draftsperson.`,
      titleDescription: `Electrical engineering draftsperson assists electrical engineers and engineering technologists with the design and layout of electrical circuits.Electrical engineering draftspersons prepare electrical circuit drawings, plans and schematics.Electrical engineering draftsperson performs sophisticated computations.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/electricalengineeringDraftsperson.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 2 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Electrical Engineering Draftsperson:
      
      `,
      thirdDescription: [
        `Electrical Engineering Design Draftsperson
       `,
        `Electrical Engineering Detail Draftsperson
       `,
        `Electrical Engineering Drafting Officer
       `,
        `Relays Draftsperson`,
        `Substation Design Draftsperson`,
      ],
      occupationTitle: `On the Occupation Listof Electrical Engineering Draftsperson:`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Electrical Engineering Draftsperson:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle:
        "Visa Provision for Electrical Engineering Draftsperson:",
      visaprovision: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
        `,

      unitTitle: `Unit Group 3123:Electrical Engineering Draftspersons and Technicians.`,
      unitDescription: `Electrical Engineering Draftspersons and Technicians draw diagrams and tabulations for electrical engineering projects such as irrigation, airports, dams, bridges, and other constructions. Electrical Engineering Draftspersons and Technicians interpret job instructions, carry out required processes, and select the appropriate equipment. Electrical Engineering Draftspersons and Technicians perform the computation of material costs and completed works are covered by specifications, norms, and contract conditions.It is possible that registration or licensing will be required.`,
      skillleveltitle:
        "Skill Level required for Electrical Engineering Draftspersons.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 312311 Electrical Engineering Draftsperson
          <br />
          • 312312 Electrical Engineering Technician
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 3123.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle:
        "Language proficiency to be eligible for Electrical Engineering Draftsperson..",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Electrical Engineering Draftspersons are  responsible for the following tasks:",
      ],
      tasks: [
        `Electrical engineering draftsperson collect and test data.
       `,
        `Electrical engineering draftsperson performs sophisticated computations.
       `,
        `Electrical engineering draftsperson evaluates graphing outcomes.
      `,
        `Electrical engineering draftsperson draw chart and prepare tabulation from collected data.
       `,
        `Electrical engineering draftsperson assists electrical engineers and engineering technologists with the design and layout of electrical circuits.
       `,
        `Electrical engineering draftspersons assist in installations on substations, switchgear, cabling systems and motor control systems.
       `,
        `Electrical engineering draftspersons calculate prices and quantities of materials for electrical engineering projects.
       `,
        `Electrical engineering draftspersons prepare electrical circuit drawings, plans and schematics.
       `,
        `Producing electrical installation and circuits drawings, plans, and schematics.
       `,
        `Electrical engineering draftspersons evaluate designs and completed goods for requirements and regulatory compliance.
        
        
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    electricalengineeringTechnician: {
      title: `ANZSCO 312312-Electrical Engineering Technician.`,
      titleDescription: `Electrical   engineering   Technicians   collect   and   test   data,   perform   sophisticated computations  and evaluategraphing  outcomes.  Electrical  engineering  Technicians assist  electrical  engineers  and  engineering technologists  with  the design  and layout  of electrical circuits.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/electricalengineeringTechnician.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 2 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Electrical Engineering Technician:
      
      `,
      thirdDescription: [
        `Electrical Engineering Laboratory Technician
       `,
        `Electrical Instrument Technician
      `,
      ],
      occupationTitle: `On the Occupation Listof Electrical Engineering Technician:`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Electrical Engineering Technician:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle:
        "Visa Provision for Electrical Engineering Technician:",
      visaprovision: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

        `,

      unitTitle: `Unit Group 3123:Electrical Engineering Draftspersons and Technicians.`,
      unitDescription: `Electrical  Engineering  Draftspersons  and  Technicians  collect  and  test  data,  perform sophisticated  computations  and evaluategraphing  outcomes.Electrical  Engineering Draftspersons and Technicians assist electrical engineers and engineering technologists with the design and layout of electrical circuits. Electrical Engineering Draftspersons and Technicians assist in installations on substations, switchgear, cabling systems and motor control systems.It is possible that registration or licensing will be required.`,
      skillleveltitle:
        "Skill Level required for Electrical Engineering Technicians.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 312311 Electrical Engineer.
          <br />
          • 312312 Electrical Network Engineer.
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 3123.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      `,
      ],

      languagetitle:
        "Language proficiency to be eligible for Electrical Engineering Technician.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Electrical Engineering Techniciansare responsible for the following tasks:",
      ],
      tasks: [
        `Electrical engineering technicians evaluate designs and completed goods for requirements and regulatory compliance.`,
        `Electrical engineering technicians prepare electrical circuit drawings, plans and schematics.`,
        `Electrical engineeringtechnicians assist in installations on substations, switchgear, cabling systems and motor control systems.`,
        `Electrical engineering Technicians assist electrical engineers and engineering technologists with the design and layout of electrical circuits.`,
        `Electrical engineering Technicians collect and test data, performsophisticated computationsand evaluates graphing outcomes.
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    telecommunicationfieldEngineer: {
      title: `ANZSCO 313212-Telecommunications Field Engineer.`,
      titleDescription: `Telecommunications field engineers install, maintain, repair and diagnose malfunction of microwave, telemetry, satellite and other radio and electromagnetic wave communication systems.Telecommunications field engineers configure and integrate network and telecommunications technology with computer peripherals, databases and operating systems.It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/telecommunicationfieldEngineer.png`,
      skillTitle: `Skill Level`,
      skillDescription: `Level 2 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `
      
      `,
      thirdDescription: [
        ` 
       
      `,
      ],
      occupationTitle: `On the Occupation List of Telecommunications Field Engineer:`,
      occupationList: [
        `489 (S/T) Occupations List
      `,
        `482 TSS Visa Medium Term List
      `,
        `407 Training visa occupations List
      `,
        `482 TSS Visa Regional Occupation List
      `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,
        `190 State/Territory Sponsored 
      `,
        `186 ENS Visa Occupations List
      `,
        `187 RSMS Visa Occupations List
      `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List Telecommunications Field Engineer:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle:
        "Visa Provision forTelecommunications Field Engineer:",
      visaprovision: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied.Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

        `,

      unitTitle: `Unit Group 3132:Telecommunication Field Engineer.`,
      unitDescription: `Telecommunications Engineering Professionals select optimal telecommunications hardware and software configurations to ensure telecommunications equipment performs as expected.Telecommunication engineering professionals analyse and study interruption, intelligibility, and clarification to minimise and avoid present and prospective problems. Registration or licensing may be required.`,
      skillleveltitle:
        "Skill Level required for Telecommunications Field Engineer.",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this Group.`,
      occupationDescription: (
        <div>
          • 313211 Radiocommunications Technician
          <br />
          • 313212 Telecommunications Field Engineer
          <br />
          • 313213 Telecommunications Network Planner
          <br />• 313214 Telecommunications Technical Officer or Technologist
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 3132.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
      `,
        `Priority Skilled Lists may apply a specific requirement in some states
      `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
      
      `,
      ],

      languagetitle:
        "Language proficiency to be eligible for Telecommunications Field Engineer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,
        `OET result with a minimum grade B in all sections;
`,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        "Telecommunications Field Engineers are responsible for the following tasks:",
      ],
      tasks: [
        `Telecommunications field engineers install, maintain, repair and diagnose malfunction of microwave, telemetry, satellite and other radio and electromagnetic wave communication systems.
       `,
        `Telecommunications field engineers configure and integrate network and telecommunications technology with computer peripherals, databases and operating systems.
        `,
        `Telecommunications field engineers develop and record logs of the detailed location and status of inventories.
        `,
        `Telecommunications field engineers maintain the documentation of communication policies, procedures, quality standards, guidelines and regulations
        `,
        `Telecommunications field engineers monitor the performance of complex telecommunications networks and equipment.
        `,
        `Telecommunications field engineers provide technical advice and information on complex telecommunication networks. 
        `,
        `Telecommunications field engineers plan the development of customer access telecommunications network infrastructure. 
       `,
        `Telecommunications field engineers Provide ongoing operational support in designing, optimising, troubleshooting, diagnosing and resolving telecommunications network performance malfunctions 
        
        
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    navalArchitect: {
      title: `ANZSCO 233916- Naval Architect / Marine Designer`,
      titleDescription: `Naval Architect / Marine Designer Designs the construction of marine craft and floating structures. Naval Architect / Marine Designer supervise the repair of marine craft and floating structures. Registration or licensing may be required It is possible that registration or licensing will be required.`,
      image: `/images/SpecificAnzsco/naval_architect.png`,
      skillTitle: `Skill level for Naval Architect / Marine Designer`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Specialisations of Naval Architect / Marine Designer`,
      secondDescription: `Shipbuilding Designer`,
      thirdTitle: `Skill Assessment Authority of Naval Architect / Marine Designer`,
      thirdDescription: [
        ` EA (Engineers Australia) / AIM
      `,
      ],
      occupationTitle: `On the Occupation List of Naval Architect / Marine Designer`,
      occupationList: [
        `489 (S/T) Occupations List
        `,
        `482 TSS Visa Medium Term List
        `,
        `407 Training visa occupations List
        `,
        `482 TSS Visa Regional Occupation List
        `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
        `,
        `190 State/Territory Sponsored 
        `,
        `186 ENS Visa Occupations List
        `,
        `187 RSMS Visa Occupations List
        `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
        `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
        `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Naval Architect / Marine Designer:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle:
        "Visa Provision for Naval Architect / Marine Designer.",
      visaprovision: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.`,

      unitTitle: `Unit Group 2339: Other Engineering Professionals.`,
      unitDescription: `Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.`,
      skillleveltitle:
        "Skill Level required for Naval Architect / Marine Designer",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).",

      occupationsTitle: `Occupations in this 2339 Unit Group`,
      occupationDescription: (
        <div>
          • 233911 Aeronautical Engineer
          <br />
          • 233912 Agricultural Engineer
          <br />
          • 233913 Biomedical Engineer
          <br />• 233914 Engineering Technologist
          <br />
          • 233915 Environmental Engineer
          <br />
          • 233916 Naval Architect / Marine Designer
          <br />• 233999 Engineering Professionals nec
        </div>
      ),
      exceptionstitle: "Exceptions for Unit Group 2339.",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories.
        `,
        `Priority Skilled Lists may apply a specific requirement in some states.
        `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
        
      `,
      ],

      languagetitle:
        "Language proficiency to be eligible for Naval Architect / Marine Designer.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`,
      ],

      tasktitle: [
        `
        Naval Architect / Marine Designer is responsible for the following tasks:
        `,
      ],
      tasks: [
        `Naval Architect / Marine Designer prepares the flow of the project by portraying tasks in a diagram.
        `,
        `Naval Architect / Marine Designer carries out required calculations for the hull structure. 
        `,
        `Naval Architect / Marine Designer develop standards and regulations for testing, modification, development, quality, control, tracking, maintenance, and inspection.
        `,
        `Naval Architect / Marine Designer prepare the Nesting for the cutting of steel plate for generating the bills of materials by using the auto nesting software. 
        `,
        `Naval Architect / Marine Designer develop the package of workshop document which includes the documents of drawing issued to the production departments for building the unit.
        `,
        `Naval Architect / Marine Designer creates the drawings of the working process for the fabrication of the unit by showing the plan of assembly and methods of building for the hull units.
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    electronicsDraftsperson: {
      title: `Electronic Engineering Draftsperson ANZSCO 312411-CDR Sample.
      `,
      titleDescription: `Electronic Engineering Draftspersons prepare drawings, modelling, plans and integration for electronic engineering systems. Electronic Engineering Draftspersons estimating material costs and quantities.
      `,
      image: `/images/SpecificAnzsco/electronics_draftsperson.png`,
      skillTitle: `Skill level`,
      skillDescription: `Level 2 or Equivalent`,
      secondTitle: `Skill Assessment Authority`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: ``,
      thirdDescription: [],
      occupationTitle: `On the Occupation List`,
      occupationList: [
        `489 (S/T) Occupations List
        `,
        `482 TSS Visa Medium Term List
        `,
        `407 Training visa occupations List
        `,
        `482 TSS Visa Regional Occupation List
        `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
        `,
        `190 State/Territory Sponsored 
        `,
        `186 ENS Visa Occupations List
        `,
        `187 RSMS Visa Occupations List
        `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
        `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
        `,
      ],

      notoccuoationtitle: "Not on the Occupation List",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle: "Visa Provision",
      visaprovision: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied for. Visas in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
      `,

      unitTitle: `Unit Group 3124: Electronic Engineering Draftspersons and Technicians`,
      unitDescription: `Electronic Engineering Draftspersons and Technicians inspecting designs and finished products for compliance with specifications, drawings, contracts and regulations.
      `,
      skillleveltitle: "Skill Level",
      skilllevel:
        "Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1). Registration or licensing may be required.",

      occupationsTitle: `Occupations in this Group`,
      occupationDescription: (
        <div>
          • Engineering Manager ANZSCO 133211
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
        `,
        `Priority Skilled Lists may apply a specific requirement in some states
        `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
        `,
      ],

      languagetitle: "Language proficiency.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL IBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall
        `,
      ],

      tasktitle: [
        `
        Electronic Engineering Draftspersons and Technicians are responsible for the following tasks
        `,
      ],
      tasks: [
        `Electronic Engineering Draftspersons and Technicians prepare drawings, modelling, plans and integration for electronic engineering systems.
        `,
        `Electronic Engineering Draftspersons and Technicians develop, construct and test electronic equipment and associated circuitry in accordance with technical requirements.
        `,
        `Electronic Engineering Draftspersons and Technicians install, test, verification, repair and modify electronic equipment and record graph results.
        `,
        `Electronic Engineering Draftspersons and Technicians estimating material costs and quantities.
        `,
        `Electronic Engineering Draftspersons and Technicians evaluating the performance of equipment.
        `,
        `Electronic Engineering Draftspersons and Technicians inspecting designs and finished products for compliance with specifications, drawings, contracts and regulations.
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    telecommunicationsNetworkPlanner: {
      title: `Telecommunications Network Planner ANZSCO 313213-CDR Sample`,
      titleDescription: `Telecommunications Network Planner work in configuring and integrating network and telecommunications technology with computer software, hardware, desktops, peripherals, databases and operating systems. Telecommunications Network Planner maintains the documentation of communication policies, procedures, guidelines and regulations, and quality standards. Registration or licensing of the related fields will probably be required. 
      `,
      image: `/images/SpecificAnzsco/telecommunications_network_planner.png`,
      skillTitle: `Skill level for Telecommunications Network Planner`,
      skillDescription: `Level 1 or Equivalent`,
      secondTitle: `Skill Assessment Authority of Telecommunications Network Planner`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Telecommunications Network Planner`,
      thirdDescription: [
        `Mud Engineer,
        Petrophysical Engineer
        `,
      ],
      occupationTitle: `On the Occupation List`,
      occupationList: [
        `489 (S/T) Occupations List
        `,
        `482 TSS Visa Medium Term List
        `,
        `407 Training visa occupations List
        `,
        `482 TSS Visa Regional Occupation List
        `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
        `,
        `190 State/Territory Sponsored 
        `,
        `186 ENS Visa Occupations List
        `,
        `187 RSMS Visa Occupations List
        `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
        `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
        `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Telecommunications Network Planner",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle:
        "Visa Provision for Telecommunications Network Planner",
      visaprovision: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas
      `,

      unitTitle: `Unit Group 3132: Telecommunications Technical Specialists`,
      unitDescription: `Telecommunications Technical Specialists monitor the performance of complex telecommunications networks and equipment. Telecommunications Technical Specialist plans the development of customer access to telecommunications network infrastructure. Telecommunications Technical Specialists are responsible for liaising with vendors, suppliers, service providers and external resources and monitoring contractual obligations and performance delivery. It is possible that registration or licensing will be required.
      `,
      skillleveltitle:
        "Skill Level required for Pe Telecommunications Network Planner",
      skilllevel: `Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
        `,

      occupationsTitle: `Occupations in this Group`,
      occupationDescription: (
        <div>
          • 233611 Mining Engineer (excluding Petroleum)
          <br />
          • 233612 Petroleum Engineer
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
        `,
        `Priority Skilled Lists may apply a specific requirement in some states
        `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher.
        `,
      ],

      languagetitle:
        "Required level of Language proficiency for Telecommunications Network Planner",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
        `,
      ],

      tasktitle: [
        `
        Telecommunications Network Planner are responsible for the following tasks        `,
      ],
      tasks: [
        `Telecommunications Network Planner installs, maintains, repairs and diagnose malfunctions of microwave, telemetry, multiplexing, satellite and other radio and electromagnetic wave communication systems.
        `,
        `Telecommunications Network Planner work in configuring and integrating network and telecommunications technology with computer software, hardware, desktops, peripherals, databases and operating systems.
        `,
        `Telecommunications Network Planner develop and record logs of the details, locations and status of inventories, parts, equipment and instruments. 
        `,
        `Telecommunications Network Planner maintains the documentation of communication policies, procedures, guidelines and regulations, and quality standards.
        `,
        `Telecommunications Network Planner provides technical advice and information. 
        `,
        `Telecommunications Network Planner monitors the performance of complex telecommunications networks and equipment.
        `,
        `Telecommunications Network Planner plans the development of customer access telecommunications network infrastructure.
        `,
        `Telecommunications Network Planners are responsible for liaising with vendors, suppliers, service providers and external resources and monitoring contractual obligations and performance delivery.
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    telecommunicationsTechnologist: {
      title: `Telecommunications Technical Officer or Technologist ANZSCO 313214-CDR Sample.`,
      titleDescription: `Telecommunications Network Planner monitors the performance of complex telecommunications networks and equipment. Telecommunications Technical Officer or Technologist monitors the performance of complex telecommunications networks and equipment. Registration or licensing of the related fields will probably be required.  
      `,
      image: `/images/SpecificAnzsco/telecommunications_technologist.png`,
      skillTitle: `Skill level for Telecommunications Technical Officer or Technologist`,
      skillDescription: `Level 2 or Equivalent`,
      secondTitle: `Skill Assessment Authority of Telecommunications Technical Officer or Technologist:
`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Telecommunications Technical Officer or Technologist:
      `,
      thirdDescription: [
        `Mud Engineer,
        Petrophysical Engineer
        `,
      ],
      occupationTitle: `On the Occupation List Telecommunications Technical Officer or Technologist`,
      occupationList: [
        `489 (S/T) Occupations List
        `,
        `482 TSS Visa Medium Term List
        `,
        `407 Training visa occupations List
        `,
        `482 TSS Visa Regional Occupation List
        `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
        `,
        `190 State/Territory Sponsored 
        `,
        `186 ENS Visa Occupations List
        `,
        `187 RSMS Visa Occupations List
        `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
        `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
         `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Telecommunications Technical Officer or Technologist:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle:
        "Visa Provision for Telecommunications Technical Officer or Technologist.",
      visaprovision: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas. `,

      unitTitle: `Unit Group 3132: Telecommunications Technical Specialists`,
      unitDescription: `Telecommunications Technical Specialists monitor the performance of complex telecommunications networks and equipment. Telecommunications Technical Specialist plans the development of customer access to telecommunications network infrastructure. Telecommunications Technical Specialists are responsible for liaising with vendors, suppliers, service providers and external resources and monitoring contractual obligations and performance delivery. It is possible that registration or licensing will be required.

      `,
      skillleveltitle:
        "Skill Level required for Telecommunications Technical Officer or Technologist",
      skilllevel: `Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
        `,

      occupationsTitle: `Occupations in this Group`,
      occupationDescription: (
        <div>
          • 313211 Radiocommunications Technician. <br/>
          • 313212 Telecommunications<br/>
          Field Engineer. <br/>
          • 313213 Telecommunications Network Planner. <br/>
          • 313214 Telecommunications Technical Officer or Technologist.
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
        `,
        `Priority Skilled Lists may apply a specific requirement in some states
        `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher`,
      ],

      languagetitle:
        "Required level of Language proficiency for Telecommunications Technical Officer or Technologist.",
      language: [
        `
        `,
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic `,
      ],

      tasktitle: [
        `
        Telecommunications Technical Officers or Technologists are responsible for the following tasks:
     `,
      ],
      tasks: [
        `Telecommunications Technical Officer or Technologist installs, maintains, repairs and diagnose malfunctions of microwave, telemetry, multiplexing, satellite and other radio and electromagnetic wave communication systems.
        `,
        `Telecommunications Technical Officer or Technologist work in configuring and integrating network and telecommunications technology with computer software, hardware, desktops, peripherals, databases and operating systems.
        `,
        `Telecommunications Technical Officer or Technologist develop and record logs of the details, locations and status of inventories, parts, equipment and instruments. 
        `,
        `Telecommunications Technical Officer or Technologist maintains the documentation of communication policies, procedures, guidelines and regulations, and quality standards.
        `,
        `Telecommunications Technical Officer or Technologist provides technical advice and information. 
        `,
        `Telecommunications Technical Officer or Technologist monitors the performance of complex telecommunications networks and equipment.
        `,
        `Telecommunications Technical Officer or Technologist plans the development of customer access telecommunications network infrastructure.
        `,
        `Telecommunications Network Planners are responsible for liaising with vendors, suppliers, service providers and external resources and monitoring contractual obligations and performance delivery.
        `,
      ],
      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
    engineeringTechnicians: {
      title: `Building and Engineering Technicians nec ANZSCO 312999- CDR Sample.`,
      titleDescription: `Telecommunications Network Planner monitors the performance of complex telecommunications networks and equipment. Telecommunications Technical Officer or Technologist monitors the performance of complex telecommunications networks and equipment. Registration or licensing of the related fields will probably be required.  
      `,
      image: `/images/SpecificAnzsco/engineering_technician.png`,
      skillTitle: `Skill level for Building and Engineering Technicians nec:`,
      skillDescription: `Level 2 or Equivalent`,
      secondTitle: `Skill Assessment Authority of Building and Engineering Technicians nec`,
      secondDescription: `EA (Engineers Australia) / AIM`,
      thirdTitle: `Specialisations of Building and Engineering Technicians nec:
      `,
      thirdDescription: [
        `Automation Technician`,
        `
        Biomedical Technician
        `,
      ],
      occupationTitle: `On the Occupation List of Building and Engineering Technicians nec:
      `,
      occupationList: [
        `489 (S/T) Occupations List
       `,
        `482 TSS Visa Medium Term List
        `,
        `407 Training visa occupations List
        `,
        `482 TSS Visa Regional Occupation List
        `,
        `189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
        `,
        `190 State/Territory Sponsored 
        `,
        `186 ENS Visa Occupations List
        `,
        `187 RSMS Visa Occupations List
        `,
        `491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
        `,
        `494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
         `,
      ],

      notoccuoationtitle:
        "Not on the Occupation List of Building and Engineering Technicians nec:",
      notoccupation: "482 TSS Visa Short Term List",

      visaprovisiontitle:
        "Visa Provision for Building and Engineering Technicians nec.",
      visaprovision: `Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
      `,

      unitTitle: `Unit Group 2339: Other Building and Engineering Technicians nec.`,
      unitDescription: `Other Building and Engineering Technicians nec unit group covers Building and Engineering Technicians not elsewhere classified. It includes Maintenance Planners, Metallurgical or Materials Technicians, and Mine Deputies. It is possible that registration or licensing will be required. `,
      skillleveltitle:
        "Skill Level required for Building and Engineering Technicians nec.",
      skilllevel: `Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
        `,

      occupationsTitle: `Occupations in this 3129 Unit Group.`,
      occupationDescription: (
        <div>
          • 312911 Maintenance Planner. • 312912 Metallurgical or Materials
          Technician. • 312913 Mine Deputy. • 312914 Other Draftsperson. •
          312999 Building and Engineering Technicians nec.
          <br />
        </div>
      ),
      exceptionstitle: "Exceptions",
      exceptions: [
        `Australian Graduate exceptions apply in some states/territories
        `,
        `Priority Skilled Lists may apply a specific requirement in some states
        `,
        `Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or equivalent, whichever is higher`,
      ],

      languagetitle:
        "Language proficiency to be eligible for Building and Engineering Technicians nec.",
      language: [
        `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
        `,
        `OET result with a minimum grade B in all sections;
        `,
        `TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
        `,
        `PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
        `,
      ],

      hero2Title: `Want to know more? Our experts will clear your Doubt.`,
      hero2Description: `We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel free to contact our experts.`,
      hero2ButtonName: `Contact an Expert`,
    },
  };

  return (
    <div className="mt-4 mt-md-0">
      <div>
        {anzsco === "anzsco-133211-engineering-manager" && (
          <Head>
            <title>Engineering Manager | Unit Group 1332 | ANZSCO 133211</title>
            <meta
              name="description"
              content="Engineering Manager | Unit Group 1332 | ANZSCO 133211"
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233111-chemical-engineer" && (
          <Head>
            <title>Chemical Engineer | Unit Group 2331 | ANZSCO 233111</title>
            <meta
              name="description"
              content="Occupational Unit Group 2331 Chemical and Materials Engineer. ANZSCO 233111 PR Visa for Chemical Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233211-civil-engineer" && (
          <Head>
            <title>Civil Engineer ANZSCO 233211</title>
            <meta
              name="description"
              content="Occupational Unit Group 2332 Civil Engineering Professionals. ANZSCO 233211 PR Visa for Civil Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233212-geo-technical-engineer" && (
          <Head>
            <title>Geo technical Engineer ANZSCO 233212</title>
            <meta
              name="description"
              content="Occupational Unit Group 2332 Civil Engineering Professionals. ANZSCO 233212 PR Visa for Geo-Technical Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233214-structural-engineer" && (
          <Head>
            <title>Structural Engineer ANZSCO 233214</title>
            <meta
              name="description"
              content="Occupational Unit Group 2332 Civil Engineering Professionals. ANZSCO 233214 PR Visa for Structural Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233215-transport-engineer" && (
          <Head>
            <title>Transport Engineer ANZSCO 233215</title>
            <meta
              name="description"
              content="Occupational Unit Group 2332 Civil Engineering Professionals. ANZSCO 233215 PR Visa for Transport Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233311-electrical-engineer" && (
          <Head>
            <title>Electrical Engineer ANZSCO 233311</title>
            <meta
              name="description"
              content="Occupational Unit Group 2333 Electrical Engineers. 

ANZSCO 233311 PR Visa for Electrical Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233411-electronics-engineer" && (
          <Head>
            <title>Electronics Engineer ANZSCO 233411</title>
            <meta
              name="description"
              content="Occupational Unit Group 2334 Electronics Engineer. 

ANZSCO 233411 PR Visa for Electronics Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233511-industrial-engineer" && (
          <Head>
            <title>Industrial Engineer ANZSCO 233511</title>
            <meta
              name="description"
              content="Occupational Unit Group 2335 Industrial,  Mechanical and  Production  Engineers  ANZSCO 233511 PR Visa for Industrial Engineer"
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233512-mechanical-engineer" && (
          <Head>
            <title>Mechanical Engineer ANZSCO 233512</title>
            <meta
              name="description"
              content="Occupational Unit Group 2335 Industrial,  Mechanical and  Production  Engineers  ANZSCO 233512 PR Visa for Mechanical Engineers."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233513-production-or-plant-engineer" && (
          <Head>
            <title>Production or plant Engineer ANZSCO 233513</title>
            <meta
              name="description"
              content="Occupational Unit Group 2335 Industrial,  Mechanical and  Production  Engineers  ANZSCO 233513 PR Visa for Production or Plant engineers"
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233611-mining-engineer" && (
          <Head>
            <title>Mining Engineer ANZSCO 233611</title>
            <meta
              name="description"
              content="Occupational Unit Group 2336 Mining Engineers ANZSCO 233611 PR Visa for Mining Engineers."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233612-petroleum-engineer" && (
          <Head>
            <title>Petroleum Engineer ANZSCO 233612</title>
            <meta
              name="description"
              content="Occupational Unit Group 2336 Mining Engineers ANZSCO 233612 PR Visa for Petroleum Engineers."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233911-aeronautical-engineer" && (
          <Head>
            <title>Aeronautical Engineer ANZSCO 233911</title>
            <meta
              name="description"
              content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233911 PR Visa for Aeronautical Engineer"
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233912-agricultural-engineer" && (
          <Head>
            <title>Agricultural Engineer ANZSCO 233912</title>
            <meta
              name="description"
              content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233912 PR Visa for Agriculture Engineer"
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233913-biomedical-engineer" && (
          <Head>
            <title>Biomedical Engineer ANZSCO 233913</title>
            <meta
              name="description"
              content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233913 PR Visa for Biomedical Engineer"
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233914-engineering-technologist" && (
          <Head>
            <title>Engineering technologist ANZSCO 233914</title>
            <meta
              name="description"
              content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233914 PR Visa for Engineering Technologists"
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233915-environmental-engineer" && (
          <Head>
            <title>Environmental Engineer ANZSCO 233915</title>
            <meta
              name="description"
              content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233915 PR Visa for Environmental Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "anzsco-233999-engineering-professionals-nec" && (
          <Head>
            <title>Engineering professionals nec ANZSCO 233999</title>
            <meta
              name="description"
              content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233999 PR Visa for Engineering Professionals."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "computer-networks-and-system-engineers-anzsco-263111" && (
          <Head>
            <title>Computer Network and Systems Engineers ANZSCO 263111</title>
            <meta
              name="description"
              content="Occupational Unit Group 2631 Other Computer Network Professionals ANZSCO 263111 PR Visa for Computer Network and Systems Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}{" "}
        {anzsco === "telecommunication-engineers-anzsco-263311" && (
          <Head>
            <title>Telecommunications Engineer ANZSCO 263311</title>
            <meta
              name="description"
              content="Occupational Unit Group 2633 Telecommunications Engineering Professionals ANZSCO 263311 PR Visa for Telecommunications Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}{" "}
        {anzsco === "telecommunication-network-engineers-anzsco-263312" && (
          <Head>
            <title>Telecommunications Network Engineers ANZSCO 263312</title>
            <meta
              name="description"
              content="Telecommunications Network Engineers ANZSCO 263312"
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}{" "}
        {anzsco === "civil-engineering-draftsperson-anzsco-312211" && (
          <Head>
            <title>Civil Engineering Draftsperson ANZSCO 312211</title>
            <meta
              name="description"
              content="Occupational Unit Group 3122 Civil Engineering Draftsperson and Technician ANZSCO 312211PR Visa for Civil Engineering Draftsperson."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}{" "}
        {anzsco === "civil-engineering-technician-anzsco-312212" && (
          <Head>
            <title>Civil Engineering Technician ANZSCO 312212</title>
            <meta
              name="description"
              content="Occupational Unit Group 3122 Civil Engineering Draftsperson and Technician ANZSCO 312212PR Visa for Civil Engineering Technician ."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}{" "}
        {anzsco === "electrical-engineering-draftsperson-anzsco-312311" && (
          <Head>
            <title>Electrical Engineering Draftsperson ANZSCO 312311</title>
            <meta
              name="description"
              content="Occupational Unit Group 3123 Electrical Engineering Draftsperson and Technician ANZSCO 312311PR Visa for Electrical Engineering Draftsperson."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}{" "}
        {anzsco === "electrical-engineering-technician-anzsco-312312" && (
          <Head>
            <title>Electrical Engineering Technician ANZSCO 312312</title>
            <meta
              name="description"
              content="Occupational Unit Group 3123 Electrical Engineering Draftsperson and Technician ANZSCO 312312PR Visa for Electrical Engineering Technician."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
        {anzsco === "telecommunication-field-engineer-anzsco-313212" && (
          <Head>
            <title>Telecommunications Field Engineer ANZSCO 313212</title>
            <meta
              name="description"
              content="Occupational Unit Group 3132 Telecommunications Technical 

Specialists. ANZSCO 313212PR Visa for Telecommunications Field Engineer."
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
        )}
      </div>

      {anzsco === "anzsco-133211-engineering-manager" && (
        <>
          <Section1
            title={allData.engineeringManager.title}
            data={allData.engineeringManager.titleDescription}
            image={allData.engineeringManager.image}
          />
          <Container>
            <Headings title={allData.engineeringManager.skillTitle} />
            <Paragraphs data={allData.engineeringManager.skillDescription} />

            <Headings title={allData.engineeringManager.secondTitle} />
            <Paragraphs data={allData.engineeringManager.secondDescription} />

            <Headings title={allData.engineeringManager.thirdTitle} />
            <Paragraphs data={allData.engineeringManager.thirdDescription} />

            <Headings title={allData.engineeringManager.occupationTitle} />

            {allData.engineeringManager.occupationList.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}

            <Headings title={allData.engineeringManager.unitTitle} />
            <Paragraphs data={allData.engineeringManager.unitDescription} />

            <Headings title={allData.engineeringManager.occupationsTitle} />
            <Paragraphs
              data={allData.engineeringManager.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.engineeringManager.stageTitle}
            details={allData.engineeringManager.stageDescription}
            list={allData.engineeringManager.stageList}
          />
          <Hero2
            title={allData.engineeringManager.hero2Title}
            data={allData.engineeringManager.hero2Description}
            buttonName={allData.engineeringManager.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233111-chemical-engineer" && (
        <>
          <Section1
            title={allData.chemicalEngineer.title}
            data={allData.chemicalEngineer.titleDescription}
            image={allData.chemicalEngineer.image}
          />
          <Container>
            <Headings title={allData.chemicalEngineer.skillTitle} />
            <Paragraphs data={allData.chemicalEngineer.skillDescription} />

            <Headings title={allData.chemicalEngineer.secondTitle} />
            <Paragraphs data={allData.chemicalEngineer.secondDescription} />

            <Headings title={allData.chemicalEngineer.thirdTitle} />
            <Paragraphs data={allData.chemicalEngineer.thirdDescription} />

            <Headings title={allData.chemicalEngineer.occupationTitle} />

            {allData.chemicalEngineer.occupationList.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}

            <Headings title={allData.chemicalEngineer.unitTitle} />
            <Paragraphs data={allData.chemicalEngineer.unitDescription} />

            <Headings title={allData.chemicalEngineer.occupationsTitle} />
            <Paragraphs data={allData.chemicalEngineer.occupationDescription} />
          </Container>
          <Expectations
            title={allData.chemicalEngineer.stageTitle}
            details={allData.chemicalEngineer.stageDescription}
            list={allData.chemicalEngineer.stageList}
          />
          <Hero2
            title={allData.chemicalEngineer.hero2Title}
            data={allData.chemicalEngineer.hero2Description}
            buttonName={allData.chemicalEngineer.hero2ButtonName}
          />
        </>
      )}
      {anzsco === "anzsco-233211-civil-engineer" && (
        <>
          <Section1
            title={allData.civilEngineer.title}
            data={allData.civilEngineer.titleDescription}
            image={allData.civilEngineer.image}
          />
          <Container>
            <Headings title={allData.civilEngineer.skillTitle} />
            <Paragraphs data={allData.civilEngineer.skillDescription} />

            <Headings title={allData.civilEngineer.secondTitle} />
            <Paragraphs data={allData.civilEngineer.secondDescription} />

            <Headings title={allData.civilEngineer.thirdTitle} />
            <Paragraphs data={allData.civilEngineer.thirdDescription} />

            <Headings title={allData.civilEngineer.occupationTitle} />

            {allData.civilEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}

            <Headings title={allData.civilEngineer.unitTitle} />
            <Paragraphs data={allData.civilEngineer.unitDescription} />

            <Headings title={allData.civilEngineer.occupationsTitle} />
            <Paragraphs data={allData.civilEngineer.occupationDescription} />
          </Container>
          <Expectations
            title={allData.civilEngineer.stageTitle}
            details={allData.civilEngineer.stageDescription}
            list={allData.civilEngineer.stageList}
          />
          <Hero2
            title={allData.civilEngineer.hero2Title}
            data={allData.civilEngineer.hero2Description}
            buttonName={allData.civilEngineer.hero2ButtonName}
          />
        </>
      )}
      {anzsco === "anzsco-233112-materials-engineer" && (
        <>
          <Section1
            title={allData.materialsEngineer.title}
            data={allData.materialsEngineer.titleDescription}
            image={allData.materialsEngineer.image}
          />
          <Container>
            <Headings title={allData.materialsEngineer.skillTitle} />
            <Paragraphs data={allData.materialsEngineer.skillDescription} />

            <Headings title={allData.materialsEngineer.secondTitle} />
            <Paragraphs data={allData.materialsEngineer.secondDescription} />

            <Headings title={allData.materialsEngineer.thirdTitle} />
            <Paragraphs data={allData.materialsEngineer.thirdDescription} />

            <Headings title={allData.materialsEngineer.occupationTitle} />

            {allData.materialsEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}

            <Headings title={allData.materialsEngineer.unitTitle} />
            <Paragraphs data={allData.materialsEngineer.unitDescription} />

            <Headings title={allData.materialsEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.materialsEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.materialsEngineer.stageTitle}
            details={allData.materialsEngineer.stageDescription}
            list={allData.materialsEngineer.stageList}
          />
          <Hero2
            title={allData.materialsEngineer.hero2Title}
            data={allData.materialsEngineer.hero2Description}
            buttonName={allData.materialsEngineer.hero2ButtonName}
          />
        </>
      )}
      {anzsco === "anzsco-233212-geo-technical-engineer" && (
        <>
          <Section1
            title={allData.geotechnicalEngineer.title}
            data={allData.geotechnicalEngineer.titleDescription}
            image={allData.geotechnicalEngineer.image}
          />
          <Container>
            <Headings title={allData.geotechnicalEngineer.skillTitle} />
            <Paragraphs data={allData.geotechnicalEngineer.skillDescription} />

            <Headings title={allData.geotechnicalEngineer.secondTitle} />
            <Paragraphs data={allData.geotechnicalEngineer.secondDescription} />

            <Headings title={allData.geotechnicalEngineer.thirdTitle} />
            <Paragraphs data={allData.geotechnicalEngineer.thirdDescription} />

            <Headings title={allData.geotechnicalEngineer.occupationTitle} />

            {allData.geotechnicalEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}

            <Headings title={allData.geotechnicalEngineer.unitTitle} />
            <Paragraphs data={allData.geotechnicalEngineer.unitDescription} />

            <Headings title={allData.geotechnicalEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.geotechnicalEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.geotechnicalEngineer.stageTitle}
            details={allData.geotechnicalEngineer.stageDescription}
            list={allData.geotechnicalEngineer.stageList}
          />
          <Hero2
            title={allData.geotechnicalEngineer.hero2Title}
            data={allData.geotechnicalEngineer.hero2Description}
            buttonName={allData.geotechnicalEngineer.hero2ButtonName}
          />
        </>
      )}
      {anzsco === "anzsco-233214-structural-engineer" && (
        <>
          <Section1
            title={allData.structuralEngineer.title}
            data={allData.structuralEngineer.titleDescription}
            image={allData.structuralEngineer.image}
          />
          <Container>
            <Headings title={allData.structuralEngineer.skillTitle} />
            <Paragraphs data={allData.structuralEngineer.skillDescription} />

            <Headings title={allData.structuralEngineer.secondTitle} />
            <Paragraphs data={allData.structuralEngineer.secondDescription} />

            <Headings title={allData.structuralEngineer.thirdTitle} />
            <Paragraphs data={allData.structuralEngineer.thirdDescription} />

            <Headings title={allData.structuralEngineer.occupationTitle} />

            {allData.structuralEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}

            <Headings title={allData.structuralEngineer.unitTitle} />
            <Paragraphs data={allData.structuralEngineer.unitDescription} />

            <Headings title={allData.structuralEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.structuralEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.structuralEngineer.stageTitle}
            details={allData.structuralEngineer.stageDescription}
            list={allData.structuralEngineer.stageList}
          />
          <Hero2
            title={allData.structuralEngineer.hero2Title}
            data={allData.structuralEngineer.hero2Description}
            buttonName={allData.structuralEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233215-transport-engineer" && (
        <>
          <Section1
            title={allData.transportEngineer.title}
            data={allData.transportEngineer.titleDescription}
            image={allData.transportEngineer.image}
          />
          <Container>
            <Headings title={allData.transportEngineer.skillTitle} />
            <Paragraphs data={allData.transportEngineer.skillDescription} />

            <Headings title={allData.transportEngineer.secondTitle} />
            <Paragraphs data={allData.transportEngineer.secondDescription} />

            <Headings title={allData.transportEngineer.thirdTitle} />
            {allData.transportEngineer.thirdDescription.map((t, i) => (
              <Paragraphs key={i} data={t} />
            ))}

            <Headings title={allData.transportEngineer.occupationTitle} />

            {allData.transportEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                /> 
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.transportEngineer.notoccuoationtitle} />
            <Paragraphs data={allData.transportEngineer.notoccupation} />

            <Headings title={allData.transportEngineer.visaprovisiontitle} />
            <Paragraphs data={allData.transportEngineer.visaprovision} />

            <Headings title={allData.transportEngineer.unitTitle} />
            <Paragraphs data={allData.transportEngineer.unitDescription} />

            <Headings title={allData.transportEngineer.skillleveltitle} />
            <Paragraphs data={allData.transportEngineer.skilllevel} />

            <Headings title={allData.transportEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.transportEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.transportEngineer.exceptionstitle}
            list={allData.transportEngineer.exceptions}
          />


          <Expectations
            title={allData.transportEngineer.tasktitle}
            list={allData.transportEngineer.tasks}
          />
          <Hero2
            title={allData.transportEngineer.hero2Title}
            data={allData.transportEngineer.hero2Description}
            buttonName={allData.transportEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233311-electrical-engineer" && (
        <>
          <Section1
            title={allData.electricalEngineer.title}
            data={allData.electricalEngineer.titleDescription}
            image={allData.electricalEngineer.image}
          />
          <Container>
            <Headings title={allData.electricalEngineer.skillTitle} />
            <Paragraphs data={allData.electricalEngineer.skillDescription} />

            <Headings title={allData.electricalEngineer.secondTitle} />
            <Paragraphs data={allData.electricalEngineer.secondDescription} />

            <Headings title={allData.electricalEngineer?.occupationTitle} />

            {allData.electricalEngineer?.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.electricalEngineer?.notoccuoationtitle} />
            <Paragraphs data={allData.electricalEngineer?.notoccupation} />

            <Headings title={allData.electricalEngineer?.visaprovisiontitle} />
            <Paragraphs data={allData.electricalEngineer?.visaprovision} />

            <Headings title={allData.electricalEngineer?.unitTitle} />
            <Paragraphs data={allData.electricalEngineer?.unitDescription} />

            <Headings title={allData.electricalEngineer?.skillleveltitle} />
            <Paragraphs data={allData.electricalEngineer?.skilllevel} />

            <Headings title={allData.electricalEngineer?.occupationsTitle} />
            <Paragraphs
              data={allData.electricalEngineer?.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.electricalEngineer?.exceptionstitle}
            list={allData.electricalEngineer?.exceptions}
          />

          <Expectations
            title={allData.electricalEngineer?.tasktitle}
            list={allData.electricalEngineer?.tasks}
          />
          <Hero2
            title={allData.electricalEngineer?.hero2Title}
            data={allData.electricalEngineer?.hero2Description}
            buttonName={allData.electricalEngineer?.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233411-electronics-engineer" && (
        <>
          <Section1
            title={allData.electronicsEngineer?.title}
            data={allData.electronicsEngineer?.titleDescription}
            image={allData.electronicsEngineer?.image}
          />
          <Container>
            <Headings title={allData.electronicsEngineer?.skillTitle} />
            <Paragraphs data={allData.electronicsEngineer?.skillDescription} />

            <Headings title={allData.electronicsEngineer?.secondTitle} />
            <Paragraphs data={allData.electronicsEngineer?.secondDescription} />

            <Headings title={allData.electronicsEngineer?.occupationTitle} />

            {allData.electronicsEngineer?.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.electronicsEngineer?.notoccuoationtitle} />
            <Paragraphs data={allData.electronicsEngineer?.notoccupation} />

            <Headings title={allData.electronicsEngineer?.visaprovisiontitle} />
            <Paragraphs data={allData.electronicsEngineer?.visaprovision} />

            <Headings title={allData.electronicsEngineer?.unitTitle} />
            <Paragraphs data={allData.electronicsEngineer?.unitDescription} />

            <Headings title={allData.electronicsEngineer?.skillleveltitle} />
            <Paragraphs data={allData.electronicsEngineer?.skilllevel} />

            <Headings title={allData.electronicsEngineer?.occupationsTitle} />
            <Paragraphs
              data={allData.electronicsEngineer?.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.electronicsEngineer?.exceptionstitle}
            list={allData.electronicsEngineer?.exceptions}
          />

          <Expectations
            title={allData.electronicsEngineer?.languagetitle}
            list={allData.electronicsEngineer?.language}
          />

          <Expectations
            title={allData.electronicsEngineer?.tasktitle}
            list={allData.electronicsEngineer?.tasks}
          />
          <Hero2
            title={allData.electronicsEngineer?.hero2Title}
            data={allData.electronicsEngineer?.hero2Description}
            buttonName={allData.electronicsEngineer?.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233511-industrial-engineer" && (
        <>
          <Section1
            title={allData.industrialEngineer.title}
            data={allData.industrialEngineer.titleDescription}
            image={allData.industrialEngineer.image}
          />
          <Container>
            <Headings title={allData.industrialEngineer.skillTitle} />
            <Paragraphs data={allData.industrialEngineer.skillDescription} />

            <Headings title={allData.industrialEngineer.secondTitle} />
            <Paragraphs data={allData.industrialEngineer.secondDescription} />

            <Headings title={allData.industrialEngineer.thirdTitle} />
            {allData.industrialEngineer.thirdDescription.map((t, i) => (
              <Paragraphs key={i} data={t} />
            ))}

            <Headings title={allData.industrialEngineer.occupationTitle} />

            {allData.industrialEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.industrialEngineer.notoccuoationtitle} />
            <Paragraphs data={allData.industrialEngineer.notoccupation} />

            <Headings title={allData.industrialEngineer.visaprovisiontitle} />
            <Paragraphs data={allData.industrialEngineer.visaprovision} />

            <Headings title={allData.industrialEngineer.unitTitle} />
            <Paragraphs data={allData.industrialEngineer.unitDescription} />

            <Headings title={allData.industrialEngineer.skillleveltitle} />
            <Paragraphs data={allData.industrialEngineer.skilllevel} />

            <Headings title={allData.industrialEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.industrialEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.industrialEngineer.exceptionstitle}
            list={allData.industrialEngineer.exceptions}
          />

          <Expectations
            title={allData.industrialEngineer.languagetitle}
            list={allData.industrialEngineer.language}
          />

          <Expectations
            title={allData.industrialEngineer.tasktitle}
            list={allData.industrialEngineer.tasks}
          />
          <Hero2
            title={allData.industrialEngineer.hero2Title}
            data={allData.industrialEngineer.hero2Description}
            buttonName={allData.industrialEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233512-mechanical-engineer" && (
        <>
          <Section1
            title={allData.mechanicalEngineer.title}
            data={allData.mechanicalEngineer.titleDescription}
            image={allData.mechanicalEngineer.image}
          />
          <Container>
            <Headings title={allData.mechanicalEngineer.skillTitle} />
            <Paragraphs data={allData.mechanicalEngineer.skillDescription} />

            <Headings title={allData.mechanicalEngineer.secondTitle} />
            <Paragraphs data={allData.mechanicalEngineer.secondDescription} />

            <Headings title={allData.mechanicalEngineer.thirdTitle} />
            {allData.mechanicalEngineer.thirdDescription.map((t, i) => (
              <Paragraphs key={i} data={t} />
            ))}

            <Headings title={allData.mechanicalEngineer.occupationTitle} />

            {allData.mechanicalEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.mechanicalEngineer.notoccuoationtitle} />
            <Paragraphs data={allData.mechanicalEngineer.notoccupation} />

            <Headings title={allData.mechanicalEngineer.visaprovisiontitle} />
            <Paragraphs data={allData.mechanicalEngineer.visaprovision} />

            <Headings title={allData.mechanicalEngineer.unitTitle} />
            <Paragraphs data={allData.mechanicalEngineer.unitDescription} />

            <Headings title={allData.mechanicalEngineer.skillleveltitle} />
            <Paragraphs data={allData.mechanicalEngineer.skilllevel} />

            <Headings title={allData.mechanicalEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.mechanicalEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.mechanicalEngineer.exceptionstitle}
            list={allData.mechanicalEngineer.exceptions}
          />

          <Expectations
            title={allData.mechanicalEngineer.languagetitle}
            list={allData.mechanicalEngineer.language}
          />

          <Expectations
            title={allData.mechanicalEngineer.tasktitle}
            list={allData.mechanicalEngineer.tasks}
          />
          <Hero2
            title={allData.mechanicalEngineer.hero2Title}
            data={allData.mechanicalEngineer.hero2Description}
            buttonName={allData.mechanicalEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233513-production-or-plant-engineer" && (
        <>
          <Section1
            title={allData.plantEngineer.title}
            data={allData.plantEngineer.titleDescription}
            image={allData.plantEngineer.image}
          />
          <Container>
            <Headings title={allData.plantEngineer.skillTitle} />
            <Paragraphs data={allData.plantEngineer.skillDescription} />

            <Headings title={allData.plantEngineer.secondTitle} />
            <Paragraphs data={allData.plantEngineer.secondDescription} />

            <Headings title={allData.plantEngineer.thirdTitle} />
            {allData.plantEngineer.thirdDescription.map((t, i) => (
              <Paragraphs key={i} data={t} />
            ))}

            <Headings title={allData.plantEngineer.occupationTitle} />

            {allData.plantEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.plantEngineer.notoccuoationtitle} />
            <Paragraphs data={allData.plantEngineer.notoccupation} />

            <Headings title={allData.plantEngineer.visaprovisiontitle} />
            <Paragraphs data={allData.plantEngineer.visaprovision} />

            <Headings title={allData.plantEngineer.unitTitle} />
            <Paragraphs data={allData.plantEngineer.unitDescription} />

            <Headings title={allData.plantEngineer.skillleveltitle} />
            <Paragraphs data={allData.plantEngineer.skilllevel} />

            <Headings title={allData.plantEngineer.occupationsTitle} />
            <Paragraphs data={allData.plantEngineer.occupationDescription} />
          </Container>
          <Expectations
            title={allData.plantEngineer.exceptionstitle}
            list={allData.plantEngineer.exceptions}
          />

          <Expectations
            title={allData.plantEngineer.languagetitle}
            list={allData.plantEngineer.language}
          />

          <Expectations
            title={allData.plantEngineer.tasktitle}
            list={allData.plantEngineer.tasks}
          />
          <Hero2
            title={allData.plantEngineer.hero2Title}
            data={allData.plantEngineer.hero2Description}
            buttonName={allData.plantEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233611-mining-engineer" && (
        <>
          <Section1
            title={allData.miningEngineer.title}
            data={allData.miningEngineer.titleDescription}
            image={allData.miningEngineer.image}
          />
          <Container>
            <Headings title={allData.miningEngineer.skillTitle} />
            <Paragraphs data={allData.miningEngineer.skillDescription} />

            <Headings title={allData.miningEngineer.secondTitle} />
            <Paragraphs data={allData.miningEngineer.secondDescription} />

            <Headings title={allData.miningEngineer.thirdTitle} />
            {allData.miningEngineer.thirdDescription.map((t, i) => (
              <Paragraphs key={i} data={t} />
            ))}

            <Headings title={allData.miningEngineer.occupationTitle} />

            {allData.miningEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.miningEngineer.notoccuoationtitle} />
            <Paragraphs data={allData.miningEngineer.notoccupation} />

            <Headings title={allData.miningEngineer.visaprovisiontitle} />
            <Paragraphs data={allData.miningEngineer.visaprovision} />

            <Headings title={allData.miningEngineer.unitTitle} />
            <Paragraphs data={allData.miningEngineer.unitDescription} />

            <Headings title={allData.miningEngineer.skillleveltitle} />
            <Paragraphs data={allData.miningEngineer.skilllevel} />

            <Headings title={allData.miningEngineer.occupationsTitle} />
            <Paragraphs data={allData.miningEngineer.occupationDescription} />
          </Container>
          <Expectations
            title={allData.miningEngineer.exceptionstitle}
            list={allData.miningEngineer.exceptions}
          />

          <Expectations
            title={allData.miningEngineer.languagetitle}
            list={allData.miningEngineer.language}
          />

          <Expectations
            title={allData.miningEngineer.tasktitle}
            list={allData.miningEngineer.tasks}
          />
          <Hero2
            title={allData.miningEngineer.hero2Title}
            data={allData.miningEngineer.hero2Description}
            buttonName={allData.miningEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233612-petroleum-engineer" && (
        <>
          <Section1
            title={allData.petroleumEngineer.title}
            data={allData.petroleumEngineer.titleDescription}
            image={allData.petroleumEngineer.image}
          />
          <Container>
            <Headings title={allData.petroleumEngineer.skillTitle} />
            <Paragraphs data={allData.petroleumEngineer.skillDescription} />

            <Headings title={allData.petroleumEngineer.secondTitle} />
            <Paragraphs data={allData.petroleumEngineer.secondDescription} />

            <Headings title={allData.petroleumEngineer.thirdTitle} />
            {allData.petroleumEngineer.thirdDescription.map((t, i) => (
              <Paragraphs key={i} data={t} />
            ))}

            <Headings title={allData.petroleumEngineer.occupationTitle} />

            {allData.petroleumEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.petroleumEngineer.notoccuoationtitle} />
            <Paragraphs data={allData.petroleumEngineer.notoccupation} />

            <Headings title={allData.petroleumEngineer.visaprovisiontitle} />
            <Paragraphs data={allData.petroleumEngineer.visaprovision} />

            <Headings title={allData.petroleumEngineer.unitTitle} />
            <Paragraphs data={allData.petroleumEngineer.unitDescription} />

            <Headings title={allData.petroleumEngineer.skillleveltitle} />
            <Paragraphs data={allData.petroleumEngineer.skilllevel} />

            <Headings title={allData.petroleumEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.petroleumEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.petroleumEngineer.exceptionstitle}
            list={allData.petroleumEngineer.exceptions}
          />

          <Expectations
            title={allData.petroleumEngineer.languagetitle}
            list={allData.petroleumEngineer.language}
          />

          <Expectations
            title={allData.petroleumEngineer.tasktitle}
            list={allData.petroleumEngineer.tasks}
          />
          <Hero2
            title={allData.petroleumEngineer.hero2Title}
            data={allData.petroleumEngineer.hero2Description}
            buttonName={allData.petroleumEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233911-aeronautical-engineer" && (
        <>
          <Section1
            title={allData.aeronauticalEngineer.title}
            data={allData.aeronauticalEngineer.titleDescription}
            image={allData.aeronauticalEngineer.image}
          />
          <Container>
            <Headings title={allData.aeronauticalEngineer.skillTitle} />
            <Paragraphs data={allData.aeronauticalEngineer.skillDescription} />

            <Headings title={allData.aeronauticalEngineer.secondTitle} />
            <Paragraphs data={allData.aeronauticalEngineer.secondDescription} />

            <Headings title={allData.aeronauticalEngineer.thirdTitle} />
            {allData.aeronauticalEngineer.thirdDescription.map((t, i) => (
              <Paragraphs key={i} data={t} />
            ))}

            <Headings title={allData.aeronauticalEngineer.occupationTitle} />

            {allData.aeronauticalEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.aeronauticalEngineer.notoccuoationtitle} />
            <Paragraphs data={allData.aeronauticalEngineer.notoccupation} />

            <Headings title={allData.aeronauticalEngineer.visaprovisiontitle} />
            <Paragraphs data={allData.aeronauticalEngineer.visaprovision} />

            <Headings title={allData.aeronauticalEngineer.unitTitle} />
            <Paragraphs data={allData.aeronauticalEngineer.unitDescription} />

            <Headings title={allData.aeronauticalEngineer.skillleveltitle} />
            <Paragraphs data={allData.aeronauticalEngineer.skilllevel} />

            <Headings title={allData.aeronauticalEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.aeronauticalEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.aeronauticalEngineer.exceptionstitle}
            list={allData.aeronauticalEngineer.exceptions}
          />

          <Expectations
            title={allData.aeronauticalEngineer.languagetitle}
            list={allData.aeronauticalEngineer.language}
          />

          <Expectations
            title={allData.aeronauticalEngineer.tasktitle}
            list={allData.aeronauticalEngineer.tasks}
          />
          <Hero2
            title={allData.aeronauticalEngineer.hero2Title}
            data={allData.aeronauticalEngineer.hero2Description}
            buttonName={allData.aeronauticalEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233912-agricultural-engineer" && (
        <>
          <Section1
            title={allData.agriculturalEngineer.title}
            data={allData.agriculturalEngineer.titleDescription}
            image={allData.agriculturalEngineer.image}
          />
          <Container>
            <Headings title={allData.agriculturalEngineer.skillTitle} />
            <Paragraphs data={allData.agriculturalEngineer.skillDescription} />

            <Headings title={allData.agriculturalEngineer.secondTitle} />
            <Paragraphs data={allData.agriculturalEngineer.secondDescription} />

            <Headings title={allData.agriculturalEngineer.thirdTitle} />
            {allData.agriculturalEngineer.thirdDescription.map((t, i) => (
              <Paragraphs key={i} data={t} />
            ))}

            <Headings title={allData.agriculturalEngineer.occupationTitle} />

            {allData.agriculturalEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.agriculturalEngineer.notoccuoationtitle} />
            <Paragraphs data={allData.agriculturalEngineer.notoccupation} />

            <Headings title={allData.agriculturalEngineer.visaprovisiontitle} />
            <Paragraphs data={allData.agriculturalEngineer.visaprovision} />

            <Headings title={allData.agriculturalEngineer.unitTitle} />
            <Paragraphs data={allData.agriculturalEngineer.unitDescription} />

            <Headings title={allData.agriculturalEngineer.skillleveltitle} />
            <Paragraphs data={allData.agriculturalEngineer.skilllevel} />

            <Headings title={allData.agriculturalEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.agriculturalEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.agriculturalEngineer.exceptionstitle}
            list={allData.agriculturalEngineer.exceptions}
          />

          <Expectations
            title={allData.agriculturalEngineer.languagetitle}
            list={allData.agriculturalEngineer.language}
          />

          <Expectations
            title={allData.agriculturalEngineer.tasktitle}
            list={allData.agriculturalEngineer.tasks}
          />
          <Hero2
            title={allData.agriculturalEngineer.hero2Title}
            data={allData.agriculturalEngineer.hero2Description}
            buttonName={allData.agriculturalEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233913-biomedical-engineer" && (
        <>
          <Section1
            title={allData.biomedicalEngineer.title}
            data={allData.biomedicalEngineer.titleDescription}
            image={allData.biomedicalEngineer.image}
          />
          <Container>
            <Headings title={allData.biomedicalEngineer.skillTitle} />
            <Paragraphs data={allData.biomedicalEngineer.skillDescription} />

            <Headings title={allData.biomedicalEngineer.secondTitle} />
            <Paragraphs data={allData.biomedicalEngineer.secondDescription} />

            <Headings title={allData.biomedicalEngineer.thirdTitle} />
            {allData.biomedicalEngineer.thirdDescription.map((t, i) => (
              <Paragraphs key={i} data={t} />
            ))}

            <Headings title={allData.biomedicalEngineer.occupationTitle} />

            {allData.biomedicalEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.biomedicalEngineer.notoccuoationtitle} />
            <Paragraphs data={allData.biomedicalEngineer.notoccupation} />

            <Headings title={allData.biomedicalEngineer.visaprovisiontitle} />
            <Paragraphs data={allData.biomedicalEngineer.visaprovision} />

            <Headings title={allData.biomedicalEngineer.unitTitle} />
            <Paragraphs data={allData.biomedicalEngineer.unitDescription} />

            <Headings title={allData.biomedicalEngineer.skillleveltitle} />
            <Paragraphs data={allData.biomedicalEngineer.skilllevel} />

            <Headings title={allData.biomedicalEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.biomedicalEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.biomedicalEngineer.exceptionstitle}
            list={allData.biomedicalEngineer.exceptions}
          />

          <Expectations
            title={allData.biomedicalEngineer.languagetitle}
            list={allData.biomedicalEngineer.language}
          />

          <Expectations
            title={allData.biomedicalEngineer.tasktitle}
            list={allData.biomedicalEngineer.tasks}
          />
          <Hero2
            title={allData.biomedicalEngineer.hero2Title}
            data={allData.biomedicalEngineer.hero2Description}
            buttonName={allData.biomedicalEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233914-engineering-technologist" && (
        <>
          <Section1
            title={allData.engineeringTechnologist.title}
            data={allData.engineeringTechnologist.titleDescription}
            image={allData.engineeringTechnologist.image}
          />
          <Container>
            <Headings title={allData.environmentalEngineer.skillTitle} />
            <Paragraphs data={allData.environmentalEngineer.skillDescription} />

            <Headings title={allData.environmentalEngineer.secondTitle} />
            <Paragraphs
              data={allData.engineeringTechnologist.secondDescription}
            />

            <Headings title={allData.environmentalEngineer.occupationTitle} />

            {allData.environmentalEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings
              title={allData.environmentalEngineer.notoccuoationtitle}
            />
            <Paragraphs data={allData.environmentalEngineer.notoccupation} />

            <Headings
              title={allData.environmentalEngineer.visaprovisiontitle}
            />
            <Paragraphs data={allData.environmentalEngineer.visaprovision} />

            <Headings title={allData.environmentalEngineer.unitTitle} />
            <Paragraphs data={allData.environmentalEngineer.unitDescription} />

            <Headings title={allData.environmentalEngineer.skillleveltitle} />
            <Paragraphs data={allData.environmentalEngineer.skilllevel} />

            <Headings title={allData.environmentalEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.environmentalEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.environmentalEngineer.exceptionstitle}
            list={allData.environmentalEngineer.exceptions}
          />

          <Expectations
            title={allData.environmentalEngineer.languagetitle}
            list={allData.environmentalEngineer.language}
          />

          <Expectations
            title={allData.environmentalEngineer.tasktitle}
            list={allData.environmentalEngineer.tasks}
          />
          <Hero2
            title={allData.engineeringTechnologist.hero2Title}
            data={allData.engineeringTechnologist.hero2Description}
            buttonName={allData.engineeringTechnologist.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233915-environmental-engineer" && (
        <>
          <Section1
            title={allData.environmentalEngineer.title}
            data={allData.environmentalEngineer.titleDescription}
            image={allData.environmentalEngineer.image}
          />
          <Container>
            <Headings title={allData.environmentalEngineer.skillTitle} />
            <Paragraphs data={allData.environmentalEngineer.skillDescription} />

            <Headings title={allData.environmentalEngineer.secondTitle} />
            <Paragraphs
              data={allData.environmentalEngineer.secondDescription}
            />

            <Headings title={allData.environmentalEngineer.occupationTitle} />

            {allData.environmentalEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings
              title={allData.environmentalEngineer.notoccuoationtitle}
            />
            <Paragraphs data={allData.environmentalEngineer.notoccupation} />

            <Headings
              title={allData.environmentalEngineer.visaprovisiontitle}
            />
            <Paragraphs data={allData.environmentalEngineer.visaprovision} />

            <Headings title={allData.environmentalEngineer.unitTitle} />
            <Paragraphs data={allData.environmentalEngineer.unitDescription} />

            <Headings title={allData.environmentalEngineer.skillleveltitle} />
            <Paragraphs data={allData.environmentalEngineer.skilllevel} />

            <Headings title={allData.environmentalEngineer.occupationsTitle} />
            <Paragraphs
              data={allData.environmentalEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.environmentalEngineer.exceptionstitle}
            list={allData.environmentalEngineer.exceptions}
          />

          <Expectations
            title={allData.environmentalEngineer.languagetitle}
            list={allData.environmentalEngineer.language}
          />

          <Expectations
            title={allData.environmentalEngineer.tasktitle}
            list={allData.environmentalEngineer.tasks}
          />
          <Hero2
            title={allData.environmentalEngineer.hero2Title}
            data={allData.environmentalEngineer.hero2Description}
            buttonName={allData.environmentalEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233999-engineering-professionals-nec" && (
        <>
          <Section1
            title={allData.engineeringProfessionals.title}
            data={allData.engineeringProfessionals.titleDescription}
            image={allData.engineeringProfessionals.image}
          />
          <Container>
            <Headings title={allData.engineeringProfessionals.skillTitle} />
            <Paragraphs
              data={allData.engineeringProfessionals.skillDescription}
            />

            <Headings title={allData.engineeringProfessionals.secondTitle} />
            <Paragraphs
              data={allData.engineeringProfessionals.secondDescription}
            />
            <Headings title={allData.engineeringProfessionals.thirdTitle} />
            <Paragraphs
              data={allData.engineeringProfessionals.thirdDescription}
            />
            <Headings
              title={allData.engineeringProfessionals.occupationTitle}
            />

            {allData.engineeringProfessionals.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings
              title={allData.engineeringProfessionals.notoccuoationtitle}
            />
            <Paragraphs data={allData.engineeringProfessionals.notoccupation} />

            <Headings
              title={allData.engineeringProfessionals.visaprovisiontitle}
            />
            <Paragraphs data={allData.engineeringProfessionals.visaprovision} />

            <Headings title={allData.engineeringProfessionals.unitTitle} />
            <Paragraphs
              data={allData.engineeringProfessionals.unitDescription}
            />

            <Headings
              title={allData.engineeringProfessionals.skillleveltitle}
            />
            <Paragraphs data={allData.engineeringProfessionals.skilllevel} />

            <Headings
              title={allData.engineeringProfessionals.occupationsTitle}
            />
            <Paragraphs
              data={allData.engineeringProfessionals.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.engineeringProfessionals.exceptionstitle}
            list={allData.engineeringProfessionals.exceptions}
          />

          <Expectations
            title={allData.engineeringProfessionals.languagetitle}
            list={allData.engineeringProfessionals.language}
          />

          <Expectations
            title={allData.engineeringProfessionals.tasktitle}
            list={allData.engineeringProfessionals.tasks}
          />
          <Hero2
            title={allData.engineeringProfessionals.hero2Title}
            data={allData.engineeringProfessionals.hero2Description}
            buttonName={allData.engineeringProfessionals.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-263111-computer-networks-and-system-engineers" && (
        <>
          <Section1
            title={allData.computerEngineer.title}
            data={allData.computerEngineer.titleDescription}
            image={allData.computerEngineer.image}
          />
          <Container>
            <Headings title={allData.computerEngineer.skillTitle} />
            <Paragraphs data={allData.computerEngineer.skillDescription} />

            <Headings title={allData.computerEngineer.secondTitle} />
            <Paragraphs data={allData.computerEngineer.secondDescription} />
            <Headings title={allData.computerEngineer.thirdTitle} />
            <Paragraphs data={allData.computerEngineer.thirdDescription} />
            <Headings title={allData.computerEngineer.occupationTitle} />

            {allData.computerEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.computerEngineer.notoccuoationtitle} />
            <Paragraphs data={allData.computerEngineer.notoccupation} />

            <Headings title={allData.computerEngineer.visaprovisiontitle} />
            <Paragraphs data={allData.computerEngineer.visaprovision} />

            <Headings title={allData.computerEngineer.unitTitle} />
            <Paragraphs data={allData.computerEngineer.unitDescription} />

            <Headings title={allData.computerEngineer.skillleveltitle} />
            <Paragraphs data={allData.computerEngineer.skilllevel} />

            <Headings title={allData.computerEngineer.occupationsTitle} />
            <Paragraphs data={allData.computerEngineer.occupationDescription} />
          </Container>
          <Expectations
            title={allData.computerEngineer.exceptionstitle}
            list={allData.computerEngineer.exceptions}
          />

          <Expectations
            title={allData.computerEngineer.languagetitle}
            list={allData.computerEngineer.language}
          />

          <Expectations
            title={allData.computerEngineer.tasktitle}
            list={allData.computerEngineer.tasks}
          />
          <Hero2
            title={allData.computerEngineer.hero2Title}
            data={allData.computerEngineer.hero2Description}
            buttonName={allData.computerEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-263311-telecommunication-engineers" && (
        <>
          <Section1
            title={allData.telecommunicationsEngineer.title}
            data={allData.telecommunicationsEngineer.titleDescription}
            image={allData.telecommunicationsEngineer.image}
          />
          <Container>
            <Headings title={allData.telecommunicationsEngineer.skillTitle} />
            <Paragraphs
              data={allData.telecommunicationsEngineer.skillDescription}
            />

            <Headings title={allData.telecommunicationsEngineer.secondTitle} />
            <Paragraphs
              data={allData.telecommunicationsEngineer.secondDescription}
            />
            <Headings title={allData.telecommunicationsEngineer.thirdTitle} />
            <Paragraphs
              data={allData.telecommunicationsEngineer.thirdDescription}
            />
            <Headings
              title={allData.telecommunicationsEngineer.occupationTitle}
            />

            {allData.telecommunicationsEngineer.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings
              title={allData.telecommunicationsEngineer.notoccuoationtitle}
            />
            <Paragraphs
              data={allData.telecommunicationsEngineer.notoccupation}
            />

            <Headings
              title={allData.telecommunicationsEngineer.visaprovisiontitle}
            />
            <Paragraphs
              data={allData.telecommunicationsEngineer.visaprovision}
            />

            <Headings title={allData.telecommunicationsEngineer.unitTitle} />
            <Paragraphs
              data={allData.telecommunicationsEngineer.unitDescription}
            />

            <Headings
              title={allData.telecommunicationsEngineer.skillleveltitle}
            />
            <Paragraphs data={allData.telecommunicationsEngineer.skilllevel} />

            <Headings
              title={allData.telecommunicationsEngineer.occupationsTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsEngineer.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.telecommunicationsEngineer.exceptionstitle}
            list={allData.telecommunicationsEngineer.exceptions}
          />

          <Expectations
            title={allData.telecommunicationsEngineer.languagetitle}
            list={allData.telecommunicationsEngineer.language}
          />

          <Expectations
            title={allData.telecommunicationsEngineer.tasktitle}
            list={allData.telecommunicationsEngineer.tasks}
          />
          <Hero2
            title={allData.telecommunicationsEngineer.hero2Title}
            data={allData.telecommunicationsEngineer.hero2Description}
            buttonName={allData.telecommunicationsEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-313212-telecommunication-network-engineers" && (
        <>
          <Section1
            title={allData.telecommunicationsnetworkEngineer.title}
            data={allData.telecommunicationsnetworkEngineer.titleDescription}
            image={allData.telecommunicationsnetworkEngineer.image}
          />
          <Container>
            <Headings
              title={allData.telecommunicationsnetworkEngineer.skillTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsnetworkEngineer.skillDescription}
            />

            <Headings
              title={allData.telecommunicationsnetworkEngineer.secondTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsnetworkEngineer.secondDescription}
            />
            <Headings
              title={allData.telecommunicationsnetworkEngineer.thirdTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsnetworkEngineer.thirdDescription}
            />
            <Headings
              title={allData.telecommunicationsnetworkEngineer.occupationTitle}
            />

            {allData.telecommunicationsnetworkEngineer.occupationList?.map(
              (l, i) => (
                <Row key={i}>
                  <Col xs={1} className="pt-1">
                    <img
                      style={{ height: "20px", width: "20px", float: "right" }}
                      src="/images/Vector.png"
                      alt="hat"
                    />
                  </Col>
                  <Col xs={11}>
                    <Paragraphs data={l} />
                  </Col>
                </Row>
              )
            )}
            <Headings
              title={
                allData.telecommunicationsnetworkEngineer.notoccuoationtitle
              }
            />
            <Paragraphs
              data={allData.telecommunicationsnetworkEngineer.notoccupation}
            />

            <Headings
              title={
                allData.telecommunicationsnetworkEngineer.visaprovisiontitle
              }
            />
            <Paragraphs
              data={allData.telecommunicationsnetworkEngineer.visaprovision}
            />

            <Headings
              title={allData.telecommunicationsnetworkEngineer.unitTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsnetworkEngineer.unitDescription}
            />

            <Headings
              title={allData.telecommunicationsnetworkEngineer.skillleveltitle}
            />
            <Paragraphs
              data={allData.telecommunicationsnetworkEngineer.skilllevel}
            />

            <Headings
              title={allData.telecommunicationsnetworkEngineer.occupationsTitle}
            />
            <Paragraphs
              data={
                allData.telecommunicationsnetworkEngineer.occupationDescription
              }
            />
          </Container>
          <Expectations
            title={allData.telecommunicationsnetworkEngineer.exceptionstitle}
            list={allData.telecommunicationsnetworkEngineer.exceptions}
          />

          <Expectations
            title={allData.telecommunicationsnetworkEngineer.languagetitle}
            list={allData.telecommunicationsnetworkEngineer.language}
          />

          <Expectations
            title={allData.telecommunicationsnetworkEngineer.tasktitle}
            list={allData.telecommunicationsnetworkEngineer.tasks}
          />
          <Hero2
            title={allData.telecommunicationsnetworkEngineer.hero2Title}
            data={allData.telecommunicationsnetworkEngineer.hero2Description}
            buttonName={
              allData.telecommunicationsnetworkEngineer.hero2ButtonName
            }
          />
        </>
      )}

      {anzsco === "anzsco-312211-civil-engineering-draftsperson" && (
        <>
          <Section1
            title={allData.civilengineeringDraftsperson.title}
            data={allData.civilengineeringDraftsperson.titleDescription}
            image={allData.civilengineeringDraftsperson.image}
          />
          <Container>
            <Headings title={allData.civilengineeringDraftsperson.skillTitle} />
            <Paragraphs
              data={allData.civilengineeringDraftsperson.skillDescription}
            />

            <Headings
              title={allData.civilengineeringDraftsperson.secondTitle}
            />
            <Paragraphs
              data={allData.civilengineeringDraftsperson.secondDescription}
            />
            <Headings title={allData.civilengineeringDraftsperson.thirdTitle} />
            <Paragraphs
              data={allData.civilengineeringDraftsperson.thirdDescription}
            />
            <Headings
              title={allData.civilengineeringDraftsperson.occupationTitle}
            />

            {allData.civilengineeringDraftsperson.occupationList?.map(
              (l, i) => (
                <Row key={i}>
                  <Col xs={1} className="pt-1">
                    <img
                      style={{ height: "20px", width: "20px", float: "right" }}
                      src="/images/Vector.png"
                      alt="hat"
                    />
                  </Col>
                  <Col xs={11}>
                    <Paragraphs data={l} />
                  </Col>
                </Row>
              )
            )}
            <Headings
              title={allData.civilengineeringDraftsperson.notoccuoationtitle}
            />
            <Paragraphs
              data={allData.civilengineeringDraftsperson.notoccupation}
            />

            <Headings
              title={allData.civilengineeringDraftsperson.visaprovisiontitle}
            />
            <Paragraphs
              data={allData.civilengineeringDraftsperson.visaprovision}
            />

            <Headings title={allData.civilengineeringDraftsperson.unitTitle} />
            <Paragraphs
              data={allData.civilengineeringDraftsperson.unitDescription}
            />

            <Headings
              title={allData.civilengineeringDraftsperson.skillleveltitle}
            />
            <Paragraphs
              data={allData.civilengineeringDraftsperson.skilllevel}
            />

            <Headings
              title={allData.civilengineeringDraftsperson.occupationsTitle}
            />
            <Paragraphs
              data={allData.civilengineeringDraftsperson.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.civilengineeringDraftsperson.exceptionstitle}
            list={allData.civilengineeringDraftsperson.exceptions}
          />

          <Expectations
            title={allData.civilengineeringDraftsperson.languagetitle}
            list={allData.civilengineeringDraftsperson.language}
          />

          <Expectations
            title={allData.civilengineeringDraftsperson.tasktitle}
            list={allData.civilengineeringDraftsperson.tasks}
          />
          <Hero2
            title={allData.civilengineeringDraftsperson.hero2Title}
            data={allData.civilengineeringDraftsperson.hero2Description}
            buttonName={allData.civilengineeringDraftsperson.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-312212-civil-engineering-technician" && (
        <>
          <Section1
            title={allData.civilengineeringTechnician.title}
            data={allData.civilengineeringTechnician.titleDescription}
            image={allData.civilengineeringTechnician.image}
          />
          <Container>
            <Headings title={allData.civilengineeringTechnician.skillTitle} />
            <Paragraphs
              data={allData.civilengineeringTechnician.skillDescription}
            />

            <Headings title={allData.civilengineeringTechnician.secondTitle} />
            <Paragraphs
              data={allData.civilengineeringTechnician.secondDescription}
            />
            <Headings title={allData.civilengineeringTechnician.thirdTitle} />
            <Paragraphs
              data={allData.civilengineeringTechnician.thirdDescription}
            />
            <Headings
              title={allData.civilengineeringTechnician.occupationTitle}
            />

            {allData.civilengineeringTechnician.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings
              title={allData.civilengineeringTechnician.notoccuoationtitle}
            />
            <Paragraphs
              data={allData.civilengineeringTechnician.notoccupation}
            />

            <Headings
              title={allData.civilengineeringTechnician.visaprovisiontitle}
            />
            <Paragraphs
              data={allData.civilengineeringTechnician.visaprovision}
            />

            <Headings title={allData.civilengineeringTechnician.unitTitle} />
            <Paragraphs
              data={allData.civilengineeringTechnician.unitDescription}
            />

            <Headings
              title={allData.civilengineeringTechnician.skillleveltitle}
            />
            <Paragraphs data={allData.civilengineeringTechnician.skilllevel} />

            <Headings
              title={allData.civilengineeringTechnician.occupationsTitle}
            />
            <Paragraphs
              data={allData.civilengineeringTechnician.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.civilengineeringTechnician.exceptionstitle}
            list={allData.civilengineeringTechnician.exceptions}
          />

          <Expectations
            title={allData.civilengineeringTechnician.languagetitle}
            list={allData.civilengineeringTechnician.language}
          />

          <Expectations
            title={allData.civilengineeringTechnician.tasktitle}
            list={allData.civilengineeringTechnician.tasks}
          />
          <Hero2
            title={allData.civilengineeringTechnician.hero2Title}
            data={allData.civilengineeringTechnician.hero2Description}
            buttonName={allData.civilengineeringTechnician.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-312311-electrical-engineering-draftsperson" && (
        <>
          <Section1
            title={allData.electricalengineeringDraftsperson.title}
            data={allData.electricalengineeringDraftsperson.titleDescription}
            image={allData.electricalengineeringDraftsperson.image}
          />
          <Container>
            <Headings
              title={allData.electricalengineeringDraftsperson.skillTitle}
            />
            <Paragraphs
              data={allData.electricalengineeringDraftsperson.skillDescription}
            />

            <Headings
              title={allData.electricalengineeringDraftsperson.secondTitle}
            />
            <Paragraphs
              data={allData.electricalengineeringDraftsperson.secondDescription}
            />
            <Headings
              title={allData.electricalengineeringDraftsperson.thirdTitle}
            />
            <Paragraphs
              data={allData.electricalengineeringDraftsperson.thirdDescription}
            />
            <Headings
              title={allData.electricalengineeringDraftsperson.occupationTitle}
            />

            {allData.electricalengineeringDraftsperson.occupationList?.map(
              (l, i) => (
                <Row key={i}>
                  <Col xs={1} className="pt-1">
                    <img
                      style={{ height: "20px", width: "20px", float: "right" }}
                      src="/images/Vector.png"
                      alt="hat"
                    />
                  </Col>
                  <Col xs={11}>
                    <Paragraphs data={l} />
                  </Col>
                </Row>
              )
            )}
            <Headings
              title={
                allData.electricalengineeringDraftsperson.notoccuoationtitle
              }
            />
            <Paragraphs
              data={allData.electricalengineeringDraftsperson.notoccupation}
            />

            <Headings
              title={
                allData.electricalengineeringDraftsperson.visaprovisiontitle
              }
            />
            <Paragraphs
              data={allData.electricalengineeringDraftsperson.visaprovision}
            />

            <Headings
              title={allData.electricalengineeringDraftsperson.unitTitle}
            />
            <Paragraphs
              data={allData.electricalengineeringDraftsperson.unitDescription}
            />

            <Headings
              title={allData.electricalengineeringDraftsperson.skillleveltitle}
            />
            <Paragraphs
              data={allData.electricalengineeringDraftsperson.skilllevel}
            />

            <Headings
              title={allData.electricalengineeringDraftsperson.occupationsTitle}
            />
            <Paragraphs
              data={
                allData.electricalengineeringDraftsperson.occupationDescription
              }
            />
          </Container>
          <Expectations
            title={allData.electricalengineeringDraftsperson.exceptionstitle}
            list={allData.electricalengineeringDraftsperson.exceptions}
          />

          <Expectations
            title={allData.electricalengineeringDraftsperson.languagetitle}
            list={allData.electricalengineeringDraftsperson.language}
          />

          <Expectations
            title={allData.electricalengineeringDraftsperson.tasktitle}
            list={allData.electricalengineeringDraftsperson.tasks}
          />
          <Hero2
            title={allData.electricalengineeringDraftsperson.hero2Title}
            data={allData.electricalengineeringDraftsperson.hero2Description}
            buttonName={
              allData.electricalengineeringDraftsperson.hero2ButtonName
            }
          />
        </>
      )}
      {anzsco === "anzsco-312312-electrical-engineering-technician" && (
        <>
          <Section1
            title={allData.electricalengineeringTechnician.title}
            data={allData.electricalengineeringTechnician.titleDescription}
            image={allData.electricalengineeringTechnician.image}
          />
          <Container>
            <Headings
              title={allData.electricalengineeringTechnician.skillTitle}
            />
            <Paragraphs
              data={allData.electricalengineeringTechnician.skillDescription}
            />

            <Headings
              title={allData.electricalengineeringTechnician.secondTitle}
            />
            <Paragraphs
              data={allData.electricalengineeringTechnician.secondDescription}
            />
            <Headings
              title={allData.electricalengineeringTechnician.thirdTitle}
            />
            <Paragraphs
              data={allData.electricalengineeringTechnician.thirdDescription}
            />
            <Headings
              title={allData.electricalengineeringTechnician.occupationTitle}
            />

            {allData.electricalengineeringTechnician.occupationList?.map(
              (l, i) => (
                <Row key={i}>
                  <Col xs={1} className="pt-1">
                    <img
                      style={{ height: "20px", width: "20px", float: "right" }}
                      src="/images/Vector.png"
                      alt="hat"
                    />
                  </Col>
                  <Col xs={11}>
                    <Paragraphs data={l} />
                  </Col>
                </Row>
              )
            )}
            <Headings
              title={allData.electricalengineeringTechnician.notoccuoationtitle}
            />
            <Paragraphs
              data={allData.electricalengineeringTechnician.notoccupation}
            />

            <Headings
              title={allData.electricalengineeringTechnician.visaprovisiontitle}
            />
            <Paragraphs
              data={allData.electricalengineeringTechnician.visaprovision}
            />

            <Headings
              title={allData.electricalengineeringTechnician.unitTitle}
            />
            <Paragraphs
              data={allData.electricalengineeringTechnician.unitDescription}
            />

            <Headings
              title={allData.electricalengineeringTechnician.skillleveltitle}
            />
            <Paragraphs
              data={allData.electricalengineeringTechnician.skilllevel}
            />

            <Headings
              title={allData.electricalengineeringTechnician.occupationsTitle}
            />
            <Paragraphs
              data={
                allData.electricalengineeringTechnician.occupationDescription
              }
            />
          </Container>
          <Expectations
            title={allData.electricalengineeringTechnician.exceptionstitle}
            list={allData.electricalengineeringTechnician.exceptions}
          />

          <Expectations
            title={allData.electricalengineeringTechnician.languagetitle}
            list={allData.electricalengineeringTechnician.language}
          />

          <Expectations
            title={allData.electricalengineeringTechnician.tasktitle}
            list={allData.electricalengineeringTechnician.tasks}
          />
          <Hero2
            title={allData.electricalengineeringTechnician.hero2Title}
            data={allData.electricalengineeringTechnician.hero2Description}
            buttonName={allData.electricalengineeringTechnician.hero2ButtonName}
          />
        </>
      )}
      {anzsco === "anzsco-313212-telecommunication-field-engineer" && (
        <>
          <Section1
            title={allData.telecommunicationfieldEngineer.title}
            data={allData.telecommunicationfieldEngineer.titleDescription}
            image={allData.telecommunicationfieldEngineer.image}
          />
          <Container>
            <Headings
              title={allData.telecommunicationfieldEngineer.skillTitle}
            />
            <Paragraphs
              data={allData.telecommunicationfieldEngineer.skillDescription}
            />

            <Headings
              title={allData.telecommunicationfieldEngineer.secondTitle}
            />
            <Paragraphs
              data={allData.telecommunicationfieldEngineer.secondDescription}
            />

            <Headings
              title={allData.telecommunicationfieldEngineer.occupationTitle}
            />

            {allData.telecommunicationfieldEngineer.occupationList?.map(
              (l, i) => (
                <Row key={i}>
                  <Col xs={1} className="pt-1">
                    <img
                      style={{ height: "20px", width: "20px", float: "right" }}
                      src="/images/Vector.png"
                      alt="hat"
                    />
                  </Col>
                  <Col xs={11}>
                    <Paragraphs data={l} />
                  </Col>
                </Row>
              )
            )}
            <Headings
              title={allData.telecommunicationfieldEngineer.notoccuoationtitle}
            />
            <Paragraphs
              data={allData.telecommunicationfieldEngineer.notoccupation}
            />

            <Headings
              title={allData.telecommunicationfieldEngineer.visaprovisiontitle}
            />
            <Paragraphs
              data={allData.telecommunicationfieldEngineer.visaprovision}
            />

            <Headings
              title={allData.telecommunicationfieldEngineer.unitTitle}
            />
            <Paragraphs
              data={allData.telecommunicationfieldEngineer.unitDescription}
            />

            <Headings
              title={allData.telecommunicationfieldEngineer.skillleveltitle}
            />
            <Paragraphs
              data={allData.telecommunicationfieldEngineer.skilllevel}
            />

            <Headings
              title={allData.telecommunicationfieldEngineer.occupationsTitle}
            />
            <Paragraphs
              data={
                allData.telecommunicationfieldEngineer.occupationDescription
              }
            />
          </Container>
          <Expectations
            title={allData.telecommunicationfieldEngineer.exceptionstitle}
            list={allData.telecommunicationfieldEngineer.exceptions}
          />

          <Expectations
            title={allData.telecommunicationfieldEngineer.languagetitle}
            list={allData.telecommunicationfieldEngineer.language}
          />

          <Expectations
            title={allData.telecommunicationfieldEngineer.tasktitle}
            list={allData.telecommunicationfieldEngineer.tasks}
          />
          <Hero2
            title={allData.telecommunicationfieldEngineer.hero2Title}
            data={allData.telecommunicationfieldEngineer.hero2Description}
            buttonName={allData.telecommunicationfieldEngineer.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-312411-electronics-draftsperson" && (
        <>
          <Section1
            title={allData.electronicsDraftsperson.title}
            data={allData.electronicsDraftsperson.titleDescription}
            image={allData.electronicsDraftsperson.image}
          />
          <Container>
            <Headings title={allData.electronicsDraftsperson.skillTitle} />
            <Paragraphs
              data={allData.electronicsDraftsperson.skillDescription}
            />

            <Headings title={allData.electronicsDraftsperson.secondTitle} />
            <Paragraphs
              data={allData.electronicsDraftsperson.secondDescription}
            />

            <Headings title={allData.electronicsDraftsperson.occupationTitle} />

            {allData.electronicsDraftsperson.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings
              title={allData.electronicsDraftsperson.notoccuoationtitle}
            />
            <Paragraphs data={allData.electronicsDraftsperson.notoccupation} />

            <Headings
              title={allData.electronicsDraftsperson.visaprovisiontitle}
            />
            <Paragraphs data={allData.electronicsDraftsperson.visaprovision} />

            <Headings title={allData.electronicsDraftsperson.unitTitle} />
            <Paragraphs
              data={allData.electronicsDraftsperson.unitDescription}
            />

            <Headings title={allData.electronicsDraftsperson.skillleveltitle} />
            <Paragraphs data={allData.electronicsDraftsperson.skilllevel} />

            <Headings
              title={allData.electronicsDraftsperson.occupationsTitle}
            />
            <Paragraphs
              data={allData.electronicsDraftsperson.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.electronicsDraftsperson.exceptionstitle}
            list={allData.electronicsDraftsperson.exceptions}
          />

          <Expectations
            title={allData.electronicsDraftsperson.languagetitle}
            list={allData.electronicsDraftsperson.language}
          />

          <Expectations
            title={allData.electronicsDraftsperson.tasktitle}
            list={allData.electronicsDraftsperson.tasks}
          />
          <Hero2
            title={allData.electronicsDraftsperson.hero2Title}
            data={allData.electronicsDraftsperson.hero2Description}
            buttonName={allData.electronicsDraftsperson.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-233916-naval-architect" && (
        <>
          <Section1
            title={allData.navalArchitect.title}
            data={allData.navalArchitect.titleDescription}
            image={allData.navalArchitect.image}
          />
          <Container>
            <Headings title={allData.navalArchitect.skillTitle} />
            <Paragraphs data={allData.navalArchitect.skillDescription} />

            <Headings title={allData.navalArchitect.secondTitle} />
            <Paragraphs data={allData.navalArchitect.secondDescription} />

            <Headings title={allData.navalArchitect.occupationTitle} />

            {allData.navalArchitect.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings title={allData.navalArchitect.notoccuoationtitle} />
            <Paragraphs data={allData.navalArchitect.notoccupation} />

            <Headings title={allData.navalArchitect.visaprovisiontitle} />
            <Paragraphs data={allData.navalArchitect.visaprovision} />

            <Headings title={allData.navalArchitect.unitTitle} />
            <Paragraphs data={allData.navalArchitect.unitDescription} />

            <Headings title={allData.navalArchitect.skillleveltitle} />
            <Paragraphs data={allData.navalArchitect.skilllevel} />

            <Headings title={allData.navalArchitect.occupationsTitle} />
            <Paragraphs data={allData.navalArchitect.occupationDescription} />
          </Container>
          <Expectations
            title={allData.navalArchitect.exceptionstitle}
            list={allData.navalArchitect.exceptions}
          />

          <Expectations
            title={allData.navalArchitect.languagetitle}
            list={allData.navalArchitect.language}
          />

          <Expectations
            title={allData.navalArchitect.tasktitle}
            list={allData.navalArchitect.tasks}
          />
          <Hero2
            title={allData.navalArchitect.hero2Title}
            data={allData.navalArchitect.hero2Description}
            buttonName={allData.navalArchitect.hero2ButtonName}
          />
        </>
      )}

      {anzsco === "anzsco-313213-telecommunications-network-planner" && (
        <>
          <Section1
            title={allData.telecommunicationsNetworkPlanner.title}
            data={allData.telecommunicationsNetworkPlanner.titleDescription}
            image={allData.telecommunicationsNetworkPlanner.image}
          />
          <Container>
            <Headings
              title={allData.telecommunicationsNetworkPlanner.skillTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsNetworkPlanner.skillDescription}
            />

            <Headings
              title={allData.telecommunicationsNetworkPlanner.secondTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsNetworkPlanner.secondDescription}
            />

            <Headings
              title={allData.telecommunicationsNetworkPlanner.thirdTitle}
            />
            {allData.telecommunicationsNetworkPlanner.thirdDescription?.map(
              (t, i) => (
                <Paragraphs key={i} data={t} />
              )
            )}

            <Headings
              title={allData.telecommunicationsNetworkPlanner.occupationTitle}
            />

            {allData.telecommunicationsNetworkPlanner.occupationList?.map(
              (l, i) => (
                <Row key={i}>
                  <Col xs={1} className="pt-1">
                    <img
                      style={{ height: "20px", width: "20px", float: "right" }}
                      src="/images/Vector.png"
                      alt="hat"
                    />
                  </Col>
                  <Col xs={11}>
                    <Paragraphs data={l} />
                  </Col>
                </Row>
              )
            )}
            <Headings
              title={
                allData.telecommunicationsNetworkPlanner.notoccuoationtitle
              }
            />
            <Paragraphs
              data={allData.telecommunicationsNetworkPlanner.notoccupation}
            />

            <Headings
              title={
                allData.telecommunicationsNetworkPlanner.visaprovisiontitle
              }
            />
            <Paragraphs
              data={allData.telecommunicationsNetworkPlanner.visaprovision}
            />

            <Headings
              title={allData.telecommunicationsNetworkPlanner.unitTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsNetworkPlanner.unitDescription}
            />

            <Headings
              title={allData.telecommunicationsNetworkPlanner.skillleveltitle}
            />
            <Paragraphs
              data={allData.telecommunicationsNetworkPlanner.skilllevel}
            />

            <Headings
              title={allData.telecommunicationsNetworkPlanner.occupationsTitle}
            />
            <Paragraphs
              data={
                allData.telecommunicationsNetworkPlanner.occupationDescription
              }
            />
          </Container>
          <Expectations
            title={allData.telecommunicationsNetworkPlanner.exceptionstitle}
            list={allData.telecommunicationsNetworkPlanner.exceptions}
          />

          <Expectations
            title={allData.telecommunicationsNetworkPlanner.languagetitle}
            list={allData.telecommunicationsNetworkPlanner.language}
          />

          <Expectations
            title={allData.telecommunicationsNetworkPlanner.tasktitle}
            list={allData.telecommunicationsNetworkPlanner.tasks}
          />
          <Hero2
            title={allData.telecommunicationsNetworkPlanner.hero2Title}
            data={allData.telecommunicationsNetworkPlanner.hero2Description}
            buttonName={
              allData.telecommunicationsNetworkPlanner.hero2ButtonName
            }
          />
        </>
      )}

      {anzsco === "anzsco-313212-telecommunication-technologist" && (
        <>
          <Section1
            title={allData.telecommunicationsTechnologist.title}
            data={allData.telecommunicationsTechnologist.titleDescription}
            image={allData.telecommunicationsTechnologist.image}
          />
          <Container>
            <Headings
              title={allData.telecommunicationsTechnologist.skillTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsTechnologist.skillDescription}
            />

            <Headings
              title={allData.telecommunicationsTechnologist.secondTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsTechnologist.secondDescription}
            />

            <Headings
              title={allData.telecommunicationsTechnologist.thirdTitle}
            />
            {allData.telecommunicationsTechnologist.thirdDescription?.map(
              (t, i) => (
                <Paragraphs key={i} data={t} />
              )
            )}

            <Headings
              title={allData.telecommunicationsTechnologist.occupationTitle}
            />

            {allData.telecommunicationsTechnologist.occupationList?.map(
              (l, i) => (
                <Row key={i}>
                  <Col xs={1} className="pt-1">
                    <img
                      style={{ height: "20px", width: "20px", float: "right" }}
                      src="/images/Vector.png"
                      alt="hat"
                    />
                  </Col>
                  <Col xs={11}>
                    <Paragraphs data={l} />
                  </Col>
                </Row>
              )
            )}
            <Headings
              title={allData.telecommunicationsTechnologist.notoccuoationtitle}
            />
            <Paragraphs
              data={allData.telecommunicationsTechnologist.notoccupation}
            />

            <Headings
              title={allData.telecommunicationsTechnologist.visaprovisiontitle}
            />
            <Paragraphs
              data={allData.telecommunicationsTechnologist.visaprovision}
            />

            <Headings
              title={allData.telecommunicationsTechnologist.unitTitle}
            />
            <Paragraphs
              data={allData.telecommunicationsTechnologist.unitDescription}
            />

            <Headings
              title={allData.telecommunicationsTechnologist.skillleveltitle}
            />
            <Paragraphs
              data={allData.telecommunicationsTechnologist.skilllevel}
            />

            <Headings
              title={allData.telecommunicationsTechnologist.occupationsTitle}
            />
            <Paragraphs
              data={
                allData.telecommunicationsTechnologist.occupationDescription
              }
            />
          </Container>
          <Expectations
            title={allData.telecommunicationsTechnologist.exceptionstitle}
            list={allData.telecommunicationsTechnologist.exceptions}
          />

          <Expectations
            title={allData.telecommunicationsTechnologist.languagetitle}
            list={allData.telecommunicationsTechnologist.language}
          />

          <Expectations
            title={allData.telecommunicationsTechnologist.tasktitle}
            list={allData.telecommunicationsTechnologist.tasks}
          />
          <Hero2
            title={allData.telecommunicationsTechnologist.hero2Title}
            data={allData.telecommunicationsTechnologist.hero2Description}
            buttonName={allData.telecommunicationsTechnologist.hero2ButtonName}
          />
        </>
      )}
      {anzsco === "anzsco-312999-engineering-technician" && (
        <>
          <Section1
            title={allData.engineeringTechnicians.title}
            data={allData.engineeringTechnicians.titleDescription}
            image={allData.engineeringTechnicians.image}
          />
          <Container>
            <Headings title={allData.engineeringTechnicians.skillTitle} />
            <Paragraphs
              data={allData.engineeringTechnicians.skillDescription}
            />

            <Headings title={allData.engineeringTechnicians.secondTitle} />
            <Paragraphs
              data={allData.engineeringTechnicians.secondDescription}
            />

            <Headings title={allData.engineeringTechnicians.thirdTitle} />
            {allData.engineeringTechnicians.thirdDescription?.map((t, i) => (
              <Paragraphs key={i} data={t} />
            ))}

            <Headings title={allData.engineeringTechnicians.occupationTitle} />

            {allData.engineeringTechnicians.occupationList?.map((l, i) => (
              <Stack direction="row" key={i} spacing={1}>
                <img
                  style={{ height: "20px", width: "20px", float: "right" }}
                  src="/images/Vector.png"
                  alt="hat"
                />
                <Paragraphs data={l} />
              </Stack>
            ))}
            <Headings
              title={allData.engineeringTechnicians.notoccuoationtitle}
            />
            <Paragraphs data={allData.engineeringTechnicians.notoccupation} />

            <Headings
              title={allData.engineeringTechnicians.visaprovisiontitle}
            />
            <Paragraphs data={allData.engineeringTechnicians.visaprovision} />

            <Headings title={allData.engineeringTechnicians.unitTitle} />
            <Paragraphs data={allData.engineeringTechnicians.unitDescription} />

            <Headings title={allData.engineeringTechnicians.skillleveltitle} />
            <Paragraphs data={allData.engineeringTechnicians.skilllevel} />

            <Headings title={allData.engineeringTechnicians.occupationsTitle} />
            <Paragraphs
              data={allData.engineeringTechnicians.occupationDescription}
            />
          </Container>
          <Expectations
            title={allData.engineeringTechnicians.exceptionstitle}
            list={allData.engineeringTechnicians.exceptions}
          />

          <Expectations
            title={allData.engineeringTechnicians.languagetitle}
            list={allData.engineeringTechnicians.language}
          />

          <Expectations
            title={allData.engineeringTechnicians.tasktitle}
            list={allData.engineeringTechnicians.tasks}
          />
          <Hero2
            title={allData.engineeringTechnicians.hero2Title}
            data={allData.engineeringTechnicians.hero2Description}
            buttonName={allData.engineeringTechnicians.hero2ButtonName}
          />
        </>
      )}
    </div>
  );
};

export default SpecificAnzsco;
