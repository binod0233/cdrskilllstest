import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import Section1 from "../../components/CDRWriting/Section1";
import Headings from "../../components/Headings";
import Hero2 from "../../components/Hero2";
import Paragraphs from "../../components/Paragraphs";
import CDRSample from "../../components/SpecificSample/CDRSample";
import OurStrength from "../../components/SpecificSample/OurStrength";
import SampleFor from "../../components/SpecificSample/SampleFor";
import SampleD from "../../data/cdrsample.js";
import Head from "next/head";
import parse from "html-react-parser";
import Seo from "../../components/Seo";

const SpecificSample = ({ sampleData }) => {
  // const [resSampleData, setResSampleData] = useState(null);
  // const [addcontent, setAddcontent] = useState(null);
  // cont[image,setImage] = useState(null);
  const router = useRouter();
  const sample = router.query.sample;
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const allData = SampleD;
  // console.log("samplesData", sampleData);

  const resSampleData = sampleData?.data;
  // console.log("allData", resSampleData?.attributes?.addcontent[0]);

  return (
    <div>
      {router.isFallback || resSampleData === null ? (
        <>
          <>
            {sample === "engineering-manager" && (
              <Head>
                <title>
                  CDR Sample For Engineering Manager | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Sample For Engineering Manager | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "chemical-engineer" && (
              <Head>
                <title>
                  CDR Sample for Chemical Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Sample for Chemical Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "material-engineer" && (
              <Head>
                <title>
                  CDR Samples For Material Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Material Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "civil-engineer" && (
              <Head>
                <title>
                  CDR Samples For Civil Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Civil Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "geotechnical-engineer" && (
              <Head>
                <title>
                  CDR Samples For Geotechnical Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Geotechnical Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "structural-engineer" && (
              <Head>
                <title>
                  CDR Samples For Structural Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Structural Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "transport-engnieer" && (
              <Head>
                <title>
                  CDR Samples For Transport Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Transport Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "electrical-engineer" && (
              <Head>
                <title>
                  CDR Samples For Electrical Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Electrical Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "electronics-engineer" && (
              <Head>
                <title>
                  CDR Samples For Electronics Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Electronics Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "industrial-engineer" && (
              <Head>
                <title>
                  CDR Samples For Industrial Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Industrial Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "mechanical-engineer" && (
              <Head>
                <title>
                  CDR Samples For Mechanical Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Mechanical Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "production-engineer" && (
              <Head>
                <title>
                  CDR Samples For Production or Plant Engineer | CDR Skill
                  Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Production or Plant Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "mining-engineer" && (
              <Head>
                <title>
                  CDR Samples For Mining Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Mining Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "petroleum-engineer" && (
              <Head>
                <title>
                  CDR Samples For Petroleum Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Petroleum Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "aeronautical-engineer" && (
              <Head>
                <title>
                  CDR Samples For Aeronautical Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Aeronautical Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "biomedical-engineer" && (
              <Head>
                <title>
                  CDR Samples For Biomedical Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Biomedical Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "engineering-technologist" && (
              <Head>
                <title>
                  CDR Samples For Engineering Techonologist | CDR Skill
                  Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Engineering Techonologist | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "environmental-engineer" && (
              <Head>
                <title>
                  CDR Samples For Environmental Engineer | CDR Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Environmental Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "engineering-professionals" && (
              <Head>
                <title>
                  CDR Samples For Engineering Professionals | CDR Skill
                  Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Engineering Professionals | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "computer-network-and-system-engineer" && (
              <Head>
                <title>
                  CDR Samples For Computer Network and System Engineer | CDR
                  Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Computer Network and System Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "telecommunication-engineer" && (
              <Head>
                <title>
                  CDR Samples For Telecommuninication Field Engineer | CDR Skill
                  Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Telecommuninication Field Engineer | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {sample === "electrical-engineering" && (
              <Head>
                <title>
                  CDR Samples For Electrical Engineering Draftsperson | CDR
                  Skill Assessment
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Electrical Engineering Draftsperson | CDR Skill Assessment"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}
          </>
          <>
            {sample === "engineering-manager" && (
              <>
                <Section1
                  title={allData.engineeringManager.title}
                  data={allData.engineeringManager.titleDescription}
                  image={allData.engineeringManager.titleImage}
                />
                <SampleFor list={allData.engineeringManager.list} />

                <Container>
                  <Headings title={allData.engineeringManager.secondTitle} />
                  <Paragraphs
                    data={allData.engineeringManager.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.engineeringManager.sampleList} />
                <Container>
                  <Headings title={allData.engineeringManager.bottomTitle1} />
                  <Paragraphs
                    data={allData.engineeringManager.bottomDescription1}
                  />

                  <Headings title={allData.engineeringManager.bottomTitle2} />
                  <Paragraphs
                    data={allData.engineeringManager.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "chemical-engineer" && (
              <>
                <Section1
                  title={allData.chemicalEngineer.title}
                  data={allData.chemicalEngineer.titleDescription}
                  image={allData.chemicalEngineer.titleImage}
                />
                <SampleFor list={allData.chemicalEngineer.list} />

                <Container>
                  <Headings title={allData.chemicalEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.chemicalEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.chemicalEngineer.sampleList} />
                <Container>
                  <Headings title={allData.chemicalEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.chemicalEngineer.bottomDescription1}
                  />

                  <Headings title={allData.chemicalEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.chemicalEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "material-engineer" && (
              <>
                <Section1
                  title={allData.materialsEngineer.title}
                  data={allData.materialsEngineer.titleDescription}
                  image={allData.materialsEngineer.titleImage}
                />
                <SampleFor list={allData.materialsEngineer.list} />

                <Container>
                  <Headings title={allData.materialsEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.materialsEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.materialsEngineer.sampleList} />
                <Container>
                  <Headings title={allData.materialsEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.materialsEngineer.bottomDescription1}
                  />

                  <Headings title={allData.materialsEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.materialsEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "civil-engineer" && (
              <>
                <Section1
                  title={allData.civilEngineer.title}
                  data={allData.civilEngineer.titleDescription}
                  image={allData.civilEngineer.titleImage}
                />
                <SampleFor list={allData.civilEngineer.list} />

                <Container>
                  <Headings title={allData.civilEngineer.secondTitle} />
                  <Paragraphs data={allData.civilEngineer.secondDescription} />
                </Container>
                <CDRSample list={allData.civilEngineer.sampleList} />
                <Container>
                  <Headings title={allData.civilEngineer.bottomTitle1} />
                  <Paragraphs data={allData.civilEngineer.bottomDescription1} />

                  <Headings title={allData.civilEngineer.bottomTitle2} />
                  <Paragraphs data={allData.civilEngineer.bottomDescription2} />
                </Container>
              </>
            )}
            {sample === "geotechnical-engineer" && (
              <>
                <Section1
                  title={allData.geotechnicalEngineer.title}
                  data={allData.geotechnicalEngineer.titleDescription}
                  image={allData.geotechnicalEngineer.titleImage}
                />
                <SampleFor list={allData.geotechnicalEngineer.list} />

                <Container>
                  <Headings title={allData.geotechnicalEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.geotechnicalEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.geotechnicalEngineer.sampleList} />
                <Container>
                  <Headings title={allData.geotechnicalEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.geotechnicalEngineer.bottomDescription1}
                  />

                  <Headings title={allData.geotechnicalEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.geotechnicalEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "industrial-engineer" && (
              <>
                <Section1
                  title={allData.industrialEngineer.title}
                  data={allData.industrialEngineer.titleDescription}
                  image={allData.industrialEngineer.titleImage}
                />
                <SampleFor list={allData.industrialEngineer.list} />

                <Container>
                  <Headings title={allData.industrialEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.industrialEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.industrialEngineer.sampleList} />
                <Container>
                  <Headings title={allData.industrialEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.industrialEngineer.bottomDescription1}
                  />

                  <Headings title={allData.industrialEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.industrialEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "transport-engineer" && (
              <>
                <Section1
                  title={allData.transportEngineer.title}
                  data={allData.transportEngineer.titleDescription}
                  image={allData.transportEngineer.titleImage}
                />
                <SampleFor list={allData.transportEngineer.list} />

                <Container>
                  <Headings title={allData.transportEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.transportEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.transportEngineer.sampleList} />
                <Container>
                  <Headings title={allData.transportEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.transportEngineer.bottomDescription1}
                  />

                  <Headings title={allData.transportEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.transportEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "electrical-engineer" && (
              <>
                <Section1
                  title={allData.electricalEngineer.title}
                  data={allData.electricalEngineer.titleDescription}
                  image={allData.electricalEngineer.titleImage}
                />
                <SampleFor list={allData.electricalEngineer.list} />

                <Container>
                  <Headings title={allData.electricalEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.electricalEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.electricalEngineer.sampleList} />
                <Container>
                  <Headings title={allData.electricalEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.electricalEngineer.bottomDescription1}
                  />

                  <Headings title={allData.electricalEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.electricalEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}

            {sample === "electronics-engineer" && (
              <>
                <Section1
                  title={allData.electronicsEngineer.title}
                  data={allData.electronicsEngineer.titleDescription}
                  image={allData.electronicsEngineer.titleImage}
                />
                <SampleFor list={allData.electronicsEngineer.list} />

                <Container>
                  <Headings title={allData.electronicsEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.electronicsEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.electronicsEngineer.sampleList} />
                <Container>
                  <Headings title={allData.electronicsEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.electronicsEngineer.bottomDescription1}
                  />

                  <Headings title={allData.electronicsEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.electronicsEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}

            {sample === "mechanical-engineer" && (
              <>
                <Section1
                  title={allData.mechanicalEngineer.title}
                  data={allData.mechanicalEngineer.titleDescription}
                  image={allData.mechanicalEngineer.titleImage}
                />
                <SampleFor list={allData.mechanicalEngineer.list} />

                <Container>
                  <Headings title={allData.mechanicalEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.mechanicalEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.mechanicalEngineer.sampleList} />
                <Container>
                  <Headings title={allData.mechanicalEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.mechanicalEngineer.bottomDescription1}
                  />

                  <Headings title={allData.mechanicalEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.mechanicalEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}

            {sample === "production-or-plant-engineer" && (
              <>
                <Section1
                  title={allData.plantEngineer.title}
                  data={allData.plantEngineer.titleDescription}
                  image={allData.plantEngineer.titleImage}
                />
                <SampleFor list={allData.plantEngineer.list} />

                <Container>
                  <Headings title={allData.plantEngineer.secondTitle} />
                  <Paragraphs data={allData.plantEngineer.secondDescription} />
                </Container>
                <CDRSample list={allData.plantEngineer.sampleList} />
                <Container>
                  <Headings title={allData.plantEngineer.bottomTitle1} />
                  <Paragraphs data={allData.plantEngineer.bottomDescription1} />

                  <Headings title={allData.plantEngineer.bottomTitle2} />
                  <Paragraphs data={allData.plantEngineer.bottomDescription2} />
                </Container>
              </>
            )}

            {sample === "mining-engineer" && (
              <>
                <Section1
                  title={allData.miningEngineer.title}
                  data={allData.miningEngineer.titleDescription}
                  image={allData.miningEngineer.titleImage}
                />
                <SampleFor list={allData.miningEngineer.list} />

                <Container>
                  <Headings title={allData.miningEngineer.secondTitle} />
                  <Paragraphs data={allData.miningEngineer.secondDescription} />
                </Container>
                <CDRSample list={allData.miningEngineer.sampleList} />
                <Container>
                  <Headings title={allData.miningEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.miningEngineer.bottomDescription1}
                  />

                  <Headings title={allData.miningEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.miningEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}

            {sample === "petroleum-engineer" && (
              <>
                <Section1
                  title={allData.petroleumEngineer.title}
                  data={allData.petroleumEngineer.titleDescription}
                  image={allData.petroleumEngineer.titleImage}
                />
                <SampleFor list={allData.petroleumEngineer.list} />

                <Container>
                  <Headings title={allData.petroleumEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.petroleumEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.petroleumEngineer.sampleList} />
                <Container>
                  <Headings title={allData.petroleumEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.petroleumEngineer.bottomDescription1}
                  />

                  <Headings title={allData.petroleumEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.petroleumEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "aeronautical-engineer" && (
              <>
                <Section1
                  title={allData.aeronauticalEngineer.title}
                  data={allData.aeronauticalEngineer.titleDescription}
                  image={allData.aeronauticalEngineer.titleImage}
                />
                <SampleFor list={allData.aeronauticalEngineer.list} />

                <Container>
                  <Headings title={allData.aeronauticalEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.aeronauticalEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.aeronauticalEngineer.sampleList} />
                <Container>
                  <Headings title={allData.aeronauticalEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.aeronauticalEngineer.bottomDescription1}
                  />

                  <Headings title={allData.aeronauticalEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.aeronauticalEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "biomedical-engineer" && (
              <>
                <Section1
                  title={allData.biomedicalEngineer.title}
                  data={allData.biomedicalEngineer.titleDescription}
                  image={allData.biomedicalEngineer.titleImage}
                />
                <SampleFor list={allData.biomedicalEngineer.list} />

                <Container>
                  <Headings title={allData.biomedicalEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.biomedicalEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.biomedicalEngineer.sampleList} />
                <Container>
                  <Headings title={allData.biomedicalEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.biomedicalEngineer.bottomDescription1}
                  />

                  <Headings title={allData.biomedicalEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.biomedicalEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "agricultural-engineer" && (
              <>
                <Section1
                  title={allData.agriculturalEngineer.title}
                  data={allData.agriculturalEngineer.titleDescription}
                  image={allData.agriculturalEngineer.titleImage}
                />
                <SampleFor list={allData.agriculturalEngineer.list} />

                <Container>
                  <Headings title={allData.agriculturalEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.agriculturalEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.agriculturalEngineer.sampleList} />
                <Container>
                  <Headings title={allData.agriculturalEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.agriculturalEngineer.bottomDescription1}
                  />

                  <Headings title={allData.agriculturalEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.agriculturalEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "engineering-technologist" && (
              <>
                <Section1
                  title={allData.engineeringTechnologist.title}
                  data={allData.engineeringTechnologist.titleDescription}
                  image={allData.engineeringTechnologist.titleImage}
                />
                <SampleFor list={allData.engineeringTechnologist.list} />

                <Container>
                  <Headings
                    title={allData.engineeringTechnologist.secondTitle}
                  />
                  <Paragraphs
                    data={allData.engineeringTechnologist.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.engineeringTechnologist.sampleList} />
                <Container>
                  <Headings
                    title={allData.engineeringTechnologist.bottomTitle1}
                  />
                  <Paragraphs
                    data={allData.engineeringTechnologist.bottomDescription1}
                  />

                  <Headings
                    title={allData.engineeringTechnologist.bottomTitle2}
                  />
                  <Paragraphs
                    data={allData.engineeringTechnologist.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "environmental-engineer" && (
              <>
                <Section1
                  title={allData.environmentalEngineer.title}
                  data={allData.environmentalEngineer.titleDescription}
                  image={allData.environmentalEngineer.titleImage}
                />
                <SampleFor list={allData.environmentalEngineer.list} />

                <Container>
                  <Headings title={allData.environmentalEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.environmentalEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.environmentalEngineer.sampleList} />
                <Container>
                  <Headings
                    title={allData.environmentalEngineer.bottomTitle1}
                  />
                  <Paragraphs
                    data={allData.environmentalEngineer.bottomDescription1}
                  />

                  <Headings
                    title={allData.environmentalEngineer.bottomTitle2}
                  />
                  <Paragraphs
                    data={allData.environmentalEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}

            {sample === "engineering-professionals" && (
              <>
                <Section1
                  title={allData.engineeringProfessionals.title}
                  data={allData.engineeringProfessionals.titleDescription}
                  image={allData.engineeringProfessionals.titleImage}
                />
                <SampleFor list={allData.engineeringProfessionals.list} />

                <Container>
                  <Headings
                    title={allData.engineeringProfessionals.secondTitle}
                  />
                  <Paragraphs
                    data={allData.engineeringProfessionals.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.engineeringProfessionals.sampleList} />
                <Container>
                  <Headings
                    title={allData.engineeringProfessionals.bottomTitle1}
                  />
                  <Paragraphs
                    data={allData.engineeringProfessionals.bottomDescription1}
                  />

                  <Headings
                    title={allData.engineeringProfessionals.bottomTitle2}
                  />
                  <Paragraphs
                    data={allData.engineeringProfessionals.bottomDescription2}
                  />
                </Container>
              </>
            )}

            {sample === "computer-network-and-system-engineer" && (
              <>
                <Section1
                  title={allData.computerEngineer.title}
                  data={allData.computerEngineer.titleDescription}
                  image={allData.computerEngineer.titleImage}
                />
                <SampleFor list={allData.computerEngineer.list} />

                <Container>
                  <Headings title={allData.computerEngineer.secondTitle} />
                  <Paragraphs
                    data={allData.computerEngineer.secondDescription}
                  />
                </Container>
                <CDRSample list={allData.computerEngineer.sampleList} />
                <Container>
                  <Headings title={allData.computerEngineer.bottomTitle1} />
                  <Paragraphs
                    data={allData.computerEngineer.bottomDescription1}
                  />

                  <Headings title={allData.computerEngineer.bottomTitle2} />
                  <Paragraphs
                    data={allData.computerEngineer.bottomDescription2}
                  />
                </Container>
              </>
            )}

            {sample === "telecommunications-network-engineer" && (
              <>
                <Section1
                  title={allData.telecommunicationsNetworkEngineer.title}
                  data={
                    allData.telecommunicationsNetworkEngineer.titleDescription
                  }
                  image={allData.telecommunicationsNetworkEngineer.titleImage}
                />
                <SampleFor
                  list={allData.telecommunicationsNetworkEngineer.list}
                />

                <Container>
                  <Headings
                    title={
                      allData.telecommunicationsNetworkEngineer.secondTitle
                    }
                  />
                  <Paragraphs
                    data={
                      allData.telecommunicationsNetworkEngineer
                        .secondDescription
                    }
                  />
                </Container>
                <CDRSample
                  list={allData.telecommunicationsNetworkEngineer.sampleList}
                />
                <Container>
                  <Headings
                    title={
                      allData.telecommunicationsNetworkEngineer.bottomTitle1
                    }
                  />
                  <Paragraphs
                    data={
                      allData.telecommunicationsNetworkEngineer
                        .bottomDescription1
                    }
                  />

                  <Headings
                    title={
                      allData.telecommunicationsNetworkEngineer.bottomTitle2
                    }
                  />
                  <Paragraphs
                    data={
                      allData.telecommunicationsNetworkEngineer
                        .bottomDescription2
                    }
                  />
                </Container>
              </>
            )}

            {sample === "civil-engineering-draftsperson" && (
              <>
                <Section1
                  title={allData.civilEngineeringDraftsperson.title}
                  data={allData.civilEngineeringDraftsperson.titleDescription}
                  image={allData.civilEngineeringDraftsperson.titleImage}
                />
                <SampleFor list={allData.civilEngineeringDraftsperson.list} />

                <Container>
                  <Headings
                    title={allData.civilEngineeringDraftsperson.secondTitle}
                  />
                  <Paragraphs
                    data={
                      allData.civilEngineeringDraftsperson.secondDescription
                    }
                  />
                </Container>
                <CDRSample
                  list={allData.civilEngineeringDraftsperson.sampleList}
                />
                <Container>
                  <Headings
                    title={allData.civilEngineeringDraftsperson.bottomTitle1}
                  />
                  <Paragraphs
                    data={
                      allData.civilEngineeringDraftsperson.bottomDescription1
                    }
                  />

                  <Headings
                    title={allData.civilEngineeringDraftsperson.bottomTitle2}
                  />
                  <Paragraphs
                    data={
                      allData.civilEngineeringDraftsperson.bottomDescription2
                    }
                  />
                </Container>
              </>
            )}

            {sample === "civil-engineering-technician" && (
              <>
                <Section1
                  title={allData.civilEngineeringTechnician.title}
                  data={allData.civilEngineeringTechnician.titleDescription}
                  image={allData.civilEngineeringTechnician.titleImage}
                />
                <SampleFor list={allData.civilEngineeringTechnician.list} />

                <Container>
                  <Headings
                    title={allData.civilEngineeringTechnician.secondTitle}
                  />
                  <Paragraphs
                    data={allData.civilEngineeringTechnician.secondDescription}
                  />
                </Container>
                <CDRSample
                  list={allData.civilEngineeringTechnician.sampleList}
                />
                <Container>
                  <Headings
                    title={allData.civilEngineeringTechnician.bottomTitle1}
                  />
                  <Paragraphs
                    data={allData.civilEngineeringTechnician.bottomDescription1}
                  />

                  <Headings
                    title={allData.civilEngineeringTechnician.bottomTitle2}
                  />
                  <Paragraphs
                    data={allData.civilEngineeringTechnician.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "civil-engineering-technician" && (
              <>
                <Section1
                  title={allData.civilEngineeringTechnician.title}
                  data={allData.civilEngineeringTechnician.titleDescription}
                  image={allData.civilEngineeringTechnician.titleImage}
                />
                <SampleFor list={allData.civilEngineeringTechnician.list} />

                <Container>
                  <Headings
                    title={allData.civilEngineeringTechnician.secondTitle}
                  />
                  <Paragraphs
                    data={allData.civilEngineeringTechnician.secondDescription}
                  />
                </Container>
                <CDRSample
                  list={allData.civilEngineeringTechnician.sampleList}
                />
                <Container>
                  <Headings
                    title={allData.civilEngineeringTechnician.bottomTitle1}
                  />
                  <Paragraphs
                    data={allData.civilEngineeringTechnician.bottomDescription1}
                  />

                  <Headings
                    title={allData.civilEngineeringTechnician.bottomTitle2}
                  />
                  <Paragraphs
                    data={allData.civilEngineeringTechnician.bottomDescription2}
                  />
                </Container>
              </>
            )}
            {sample === "electrical-engineering-technician" && (
              <>
                <Section1
                  title={allData.electricalEngineeringTechnician.title}
                  data={
                    allData.electricalEngineeringTechnician.titleDescription
                  }
                  image={allData.electricalEngineeringTechnician.titleImage}
                />
                <SampleFor
                  list={allData.electricalEngineeringTechnician.list}
                />

                <Container>
                  <Headings
                    title={allData.electricalEngineeringTechnician.secondTitle}
                  />
                  <Paragraphs
                    data={
                      allData.electricalEngineeringTechnician.secondDescription
                    }
                  />
                </Container>
                <CDRSample
                  list={allData.electricalEngineeringTechnician.sampleList}
                />
                <Container>
                  <Headings
                    title={allData.electricalEngineeringTechnician.bottomTitle1}
                  />
                  <Paragraphs
                    data={
                      allData.electricalEngineeringTechnician.bottomDescription1
                    }
                  />

                  <Headings
                    title={allData.electricalEngineeringTechnician.bottomTitle2}
                  />
                  <Paragraphs
                    data={
                      allData.electricalEngineeringTechnician.bottomDescription2
                    }
                  />
                </Container>
              </>
            )}
            {sample === "telecommunications-field-engineer" && (
              <>
                <Section1
                  title={allData.telecommunicationsFieldEngineer.title}
                  data={
                    allData.telecommunicationsFieldEngineer.titleDescription
                  }
                  image={allData.telecommunicationsFieldEngineer.titleImage}
                />
                <SampleFor
                  list={allData.telecommunicationsFieldEngineer.list}
                />

                <Container>
                  <Headings
                    title={allData.telecommunicationsFieldEngineer.secondTitle}
                  />
                  <Paragraphs
                    data={
                      allData.telecommunicationsFieldEngineer.secondDescription
                    }
                  />
                </Container>
                <CDRSample
                  list={allData.telecommunicationsFieldEngineer.sampleList}
                />
                <Container>
                  <Headings
                    title={allData.telecommunicationsFieldEngineer.bottomTitle1}
                  />
                  <Paragraphs
                    data={
                      allData.telecommunicationsFieldEngineer.bottomDescription1
                    }
                  />

                  <Headings
                    title={allData.telecommunicationsFieldEngineer.bottomTitle2}
                  />
                  <Paragraphs
                    data={
                      allData.telecommunicationsFieldEngineer.bottomDescription2
                    }
                  />
                </Container>
              </>
            )}
            {sample === "electrical-engineer-draftsperson" && (
              <>
                <Section1
                  title={allData.electricalengineeringDraftsperson.title}
                  data={
                    allData.electricalengineeringDraftsperson.titleDescription
                  }
                  image={allData.electricalengineeringDraftsperson.titleImage}
                />
                <SampleFor
                  list={allData.electricalengineeringDraftsperson.list}
                />

                <Container>
                  <Headings
                    title={
                      allData.electricalengineeringDraftsperson.secondTitle
                    }
                  />
                  <Paragraphs
                    data={
                      allData.electricalengineeringDraftsperson
                        .secondDescription
                    }
                  />
                </Container>
                <CDRSample
                  list={allData.electricalengineeringDraftsperson.sampleList}
                />
                <Container>
                  <Headings
                    title={
                      allData.electricalengineeringDraftsperson.bottomTitle1
                    }
                  />
                  <Paragraphs
                    data={
                      allData.electricalengineeringDraftsperson
                        .bottomDescription1
                    }
                  />

                  <Headings
                    title={
                      allData.electricalengineeringDraftsperson.bottomTitle2
                    }
                  />
                  <Paragraphs
                    data={
                      allData.electricalengineeringDraftsperson
                        .bottomDescription2
                    }
                  />
                </Container>
              </>
            )}
            <OurStrength />
            <Hero2
              title="Choose the best reviewing service provider to review your CDR Skill Assessments Australia"
              data="Engineers who wish to pursue an engineering career in Australia should write a CDR report to demonstrate skills, knowledge 
and experience to Engineers Australia. We have dedicated engineering teams with years of experience in CDR 
Reviewing Service for engineers in Australia."
              buttonName="Check Our Pricing"
            />
          </>
        </>
      ) : (
        <>
          {/* <Head>
            <title>
              CDR Sample for Chemical Engineer | CDR Skill Assessment
            </title>
            <meta
              name="description"
              content="CDR Sample for Chemical Engineer | CDR Skill Assessment"
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head> */}
          <Seo seo={resSampleData?.attributes?.seo} />
          <>
            <Section1
              title={resSampleData?.attributes?.title}
              data={parse(resSampleData?.attributes?.paragraph)}
              image={resSampleData?.attributes?.image?.data?.attributes?.url}
            />
            <SampleFor list={allData?.chemicalEngineer?.list} />

            <Container>
              {resSampleData?.attributes?.addcontent[0] &&
                parse(resSampleData?.attributes?.addcontent[0].paragraph)}
            </Container>
            <OurStrength />
            <Hero2
              title="Choose the best reviewing service provider to review your CDR Skill Assessments Australia"
              data="Engineers who wish to pursue an engineering career in Australia should write a CDR report to demonstrate skills, knowledge 
and experience to Engineers Australia. We have dedicated engineering teams with years of experience in CDR 
Reviewing Service for engineers in Australia."
              buttonName="Check Our Pricing"
            />
          </>
        </>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const samples = await fetch(
    "https://cdrskill.herokuapp.com/api/cdrsamples?populate=deep"
  );
  const allSamples = await samples.json();
  return {
    paths: allSamples.data.map((sample) => ({
      params: {
        sample: sample.attributes.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const sample = await fetch(
    `https://cdrskill.herokuapp.com/api/cdrsamples/${params.sample}?populate=deep`
  );
  const sampleData = await sample.json();

  return {
    props: { sampleData },
    revalidate: 1,
  };
}

export default SpecificSample;
