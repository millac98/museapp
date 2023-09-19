import { useRouter } from "next/navigation";
import * as Styled from './style';

type HeaderProps = {
  children?: React.ReactNode,
}

export default function HeaderComponent({ children }: HeaderProps) {
  const router = useRouter();

  return (
    <Styled.Header>
      <Styled.Section>
        <Styled.MainHeading onClick={() => router.push('/')}>MUSE.ai</Styled.MainHeading>
          {children}
      </Styled.Section>
    </Styled.Header>
  )
}