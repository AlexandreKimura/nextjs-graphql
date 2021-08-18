import LinkWrapper from 'components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import * as S from './styles';

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        cumque culpa accusamus animi sequi impedit quibusdam libero rem tempora
        beatae, vero, pariatur laudantium dolorem, non maxime facere laborum
        modi optio?
      </p>
    </S.Body>
  </S.Content>
);

export default AboutTemplate;
