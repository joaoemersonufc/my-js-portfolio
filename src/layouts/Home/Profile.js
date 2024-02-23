import {
  default as profileImg,
  default as profileImgLarge,
  default as profileImgPlaceholder,
} from 'assets/profile.jpeg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({
  visible,
  titleId,
  title,
  text1,
  text2,
  translate,
  setTranslate,
}) => (
  <Fragment>
    <Button
      secondary
      iconHoverShift
      icon="chevronRight"
      as="div"
      style={{ marginBottom: 50 }}
      onClick={() => {
        setTranslate(translate.includes('EN') ? 'Traduzir para PTBR' : 'Translate to EN');
      }}
    >
      {translate}
    </Button>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text={title} start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      {text1}
      <Link href="https://www.grupoboticario.com.br/">Grupo Boticário</Link>
      {text2}
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const defaultText1 = `Graduado em Engenharia de Software pela Universidade Federal do Ceará - UFC, Pós-graduado em Gestão da Inovação e Data Science. Com varios anos de experiência em empresas de inovação e transformação digital. 
  Com experiência em análise e desenvolvimento de sistemas em diversos projetos e clientes nas áreas de: 
  Inovação, Logística, Telecomunicações, Saúde, Farmacêutica e Desenvolvimento de Software.
  Sou professor, mentor pela Télos e atualmente atuo como Desenvolvedor Frontend Sênior no `;

  const defaultText2 = `, realizando atividades que envolvem consultoria em arquitetura, 
  engenharia de software, desenvolvimento front-end, entre outras. Em meus trabalhos anteriores trabalhei em um projeto com ONU, SACRE, 
  Argus e outros produzindo softwares com alta escalabilidade e performance, na UDS trabalhei com R7/Record onde posso destacar 
  a aplicação de métodos de gamificação para estabelecer uma política de Documentação, reestruturação de processos nos setores de 
  infraestrutura e suporte, além de reestruturar a área de tecnologia do cliente.

  Entusiasta de eventos de inovação como Hackathons e Summer Jobs, tendo participado de dois estágios de verão na C.E.S.A.R e ACE. 
  Gerente de recursos e desenvolvedor no aplicativo Grupo Parvi (Parvi24h) no estágio de verão da empresa C.E.S.A.R 
  (Centro de Estudos e Sistemas Avançados do Recife). Pós-junior e cofundador da empresa junior IncludeJr, colaborador da TecHigienizar (UFPE)
  e pesquisador da Corona Info, uma das primeiras iniciativas no Brasil para conectar, atender e informatizar pessoas de baixa renda neste
  período pandêmico.Foi bolsista apoio do Núcleo de Melhoria em Ferramentas Computacionais (NAFeC) da UFC. Possui cursos e certificados
  nas seguintes áreas: Fast-MBA em Empreendedorismo, Negócios e Startups; Escola de Produto em Gestão de Produto e
  Construção de Produtos Digitais D.E.P.C® (DevOps), S.F.C®, S.F.P.C® e P.A.C®`;

  const ENText1 = `Graduated in Software Engineering from the Federal University of Ceará - UFC, Post-graduate in Innovation Management and Data Science. With many years of experience in innovation and digital transformation companies.
  With experience in systems analysis and development in several projects and clients in the areas of:
  Innovation, Logistics, Telecommunications, Health, Pharmaceuticals and Software Development.
  Im professor, mentor at Télos and I currently work as a Senior Frontend Developer at `;

  const ENText2 = `, performing activities that involve consulting in architecture,
  software engineering, front-end development, among others. In my previous jobs I worked on a project with the UN, SACRE,
  Argus and others producing software with high scalability and performance, at UDS I worked with R7/Record where I can highlight
  the application of gamification methods to establish a Documentation policy, restructuring of processes in the sectors of
  infrastructure and support, in addition to restructuring the client's technology area.

  Enthusiast of innovation events such as Hackathons and Summer Jobs, having participated in two summer internships at C.E.S.A.R and ACE.
  Resource manager and developer on the Parvi Group app (Parvi24h) at the C.E.S.A.R company summer internship
  (Recife Center for Studies and Advanced Systems). Post-junior and co-founder of the junior company IncludeJr, collaborator of TecHigienizar (UFPE)
  and researcher at Corona Info, one of the first initiatives in Brazil to connect, serve and computerize low-income people in this
  pandemic period. He was a supporter of the Nucleus for Improvement in Computational Tools (NAFeC) of the UFC. Has courses and certificates
  in the following areas: Fast-MBA in Entrepreneurship, Business and Startups; Product School in Product Management and
  Building Digital Products D.E.P.C® (DevOps), S.F.C®, S.F.P.C® and P.A.C®`;

  const [focused, setFocused] = useState(false);
  const [translate, setTranslate] = useState('Translate to EN');
  const [title, setTitle] = useState('Olá');
  const [text1, setText1] = useState(defaultText1);
  const [text2, setText2] = useState(defaultText2);
  const [message, setMessage] = useState('Me mande uma mensagem');
  const [about, setAbout] = useState('Sobre mim');
  const titleId = `${id}-title`;

  const translateToPTBR = useCallback(() => {
    setTitle('Olá!');
    setText1(defaultText1);
    setText2(defaultText2);
    setMessage('Me mande uma mensagem');
    setAbout('Sobre mim');
  }, [defaultText1, defaultText2]);

  const translateToEN = useCallback(() => {
    setTitle('Hello!');
    setText1(ENText1);
    setText2(ENText2);
    setMessage('Send me a message');
    setAbout('About me');
  }, [ENText1, ENText2]);

  useEffect(() => {
    if (translate.includes('EN')) return translateToPTBR();
    translateToEN();
  }, [translate, translateToEN, translateToPTBR]);

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText
                visible={visible}
                titleId={titleId}
                text1={text1}
                text2={text2}
                title={title}
                translate={translate}
                setTranslate={setTranslate}
              />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                {message}
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  {about}
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing with my acomplishment of Pearson College London"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                ></svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
