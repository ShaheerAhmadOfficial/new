import style from './index.module.css'

// Components
import Section from 'components/Section'
import Container, { Row } from 'components/Container'
import ContentBlock from 'components/ContentBlock'
import ImageTrigger from 'components/ImageTrigger'
import Square from 'components/Square'
import Heading from 'components/Heading'
import { List, ListItem } from 'components/List'

// Hooks
import { Trans, useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation('translation', { keyPrefix: 'about' })

  // ✅ SAFE guards so the page never crashes even if translations load late
  const introRaw = t('intro', { returnObjects: true })
  const intro: string[] = Array.isArray(introRaw) ? introRaw : []

  const clanTitleRaw = t('clan_title', { returnObjects: true })
  const clanTitle: string[] = Array.isArray(clanTitleRaw) ? clanTitleRaw : ['Products', '']

  const clanRaw = t('clan', { returnObjects: true })
  const clan: string[] = Array.isArray(clanRaw) ? clanRaw : []

  const methodTitle = t('method_title') as string

  const methodRaw = t('method', { returnObjects: true })
  const method: string[] = Array.isArray(methodRaw) ? methodRaw : []

  return (
    <Section name="about" className={style.root}>
      <Container grid>
        <Row start={3} end={1}>
          <div className={style.section}>
            <ContentBlock key={intro[0] || 'intro-0'}>
              <div>
                <Trans
                  i18nKey={`about.intro.0`}
                  components={{
                    ImageVenice: <ImageTrigger name="venice" />,
                    ImageSketchin: <ImageTrigger name="sketchin" />,
                    ImageTCMGTK: <ImageTrigger name="tcmgtk" sizes={[2, 3]} />
                  }}
                />
              </div>
            </ContentBlock>
          </div>
        </Row>
      </Container>

      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Heading key={intro[1] || 'intro-1'}>
            <Trans
              i18nKey="about.intro.1"
              components={{
                Square: <Square />,
                pre: <pre />
              }}
            />
          </Heading>
        </Row>
      </Container>

      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock key={intro[2] || 'intro-2'}>
            {(intro.length >= 3 ? intro.slice(2) : []).map((_, i) => (
              <div key={i}>
                <Trans
                  i18nKey={`about.intro.${i + 2}`}
                  components={{
                    ImageVenice: <ImageTrigger name="venice" />,
                    ImageSketchin: <ImageTrigger name="sketchin" />,
                    ImageTCMGTK: <ImageTrigger name="tcmgtk" sizes={[2, 3]} />
                  }}
                />
              </div>
            ))}
          </ContentBlock>
        </Row>
      </Container>

      <Container grid outerRightOnMobile>
        <Row start={2} end={2}>
          <div className={style.section}>
            <Heading alignRight key={(clanTitle[0] || 'Products') + '-title'}>
              <>
                {clanTitle[0] || 'Products'}
                <br /> {clanTitle[1] || ''}
              </>
            </Heading>
          </div>
        </Row>
      </Container>

      <Container grid>
        <Row start={2} end={2}>
          <div className={style.columns}>
            <ContentBlock key={clan[0] || 'clan-0'}>
              {(clan.length ? clan.slice(0, 2) : []).map((_, i) => (
                <div key={i}>
                  <Trans
                    i18nKey={`about.clan.${i}`}
                    components={{
                      ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
                      ImageNO1: <ImageTrigger name="no1" />,
                      ImageNO2: <ImageTrigger name="no2" />,
                      ImageNO3: <ImageTrigger name="no3" sizes={[2, 2.5]} />
                    }}
                  />
                </div>
              ))}
            </ContentBlock>

            <ContentBlock key={clan[2] || 'clan-2'}>
              {(clan.length >= 3 ? clan.slice(2) : []).map((_, i) => (
                <div key={i}>
                  <Trans
                    i18nKey={`about.clan.${i + 2}`}
                    components={{
                      ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
                      ImageNO1: <ImageTrigger name="no1" />,
                      ImageNO2: <ImageTrigger name="no2" />,
                      ImageNO3: <ImageTrigger name="no3" sizes={[2, 2.5]} />
                    }}
                  />
                </div>
              ))}
            </ContentBlock>
          </div>
        </Row>
      </Container>

      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading key={methodTitle || 'method-title'}>
              <Trans i18nKey="about.method_title" components={{ pre: <pre /> }} />
            </Heading>
          </div>
        </Row>
      </Container>

      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock key={method[0] || 'method-0'}>
            <div>
              <Trans i18nKey={`about.method.0`} />
            </div>
          </ContentBlock>
        </Row>
      </Container>

      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading key={method[1] || 'method-1'}>
              <Trans i18nKey="about.method.1" />
            </Heading>
            <Heading alignRight key={method[2] || 'method-2'}>
              <Trans i18nKey="about.method.2" />
            </Heading>
          </div>
        </Row>
      </Container>

      <Container grid>
        <Row start={1} end={1}>
          <div className={style.section}>
            <ContentBlock key={method[3] || 'method-3'}>
              <div>
                <Trans i18nKey={`about.method.3`} />
              </div>
            </ContentBlock>
          </div>
        </Row>
      </Container>

      <Container grid>
        <Row start={1} end={3}>
          <ContentBlock>
            <List>
              <ListItem end="100+">WordPress sites</ListItem>
              <ListItem end="250+">Videos edited</ListItem>
              <ListItem end="10+">Personal projects</ListItem>
              <ListItem end="∞">Digital products</ListItem>
              <ListItem end="Tool-based">Subscription services</ListItem>
            </List>
          </ContentBlock>
        </Row>
      </Container>
    </Section>
  )
}

export default About
