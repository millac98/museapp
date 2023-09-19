import { useSongs } from '../../shared/context/songs.context';
import * as Styled from './style';

export default function ToggleComponent() {
  const { state, dispatch } = useSongs();

  const handleSortSongs = () => dispatch({ type: 'sortList', payload: !state.isSortedList });

  return (
    <Styled.ToggleContainer>
      <Styled.ToggleDescription>Sort from A-Z</Styled.ToggleDescription>
      <Styled.Toggle>
        <Styled.Checkbox type="checkbox" value={state?.isSortedList} onClick={() => handleSortSongs()} />
        <Styled.Slider className='slider' />
      </Styled.Toggle>
    </Styled.ToggleContainer>
  )
}