import React from 'react';
import { FiExternalLink } from "react-icons/fi";
import { Item, List, Poster, Total } from './style';

const MovieItem = React.memo(function TodoItem({ movie }) {
  const { title, posters, type, nation, runtime, repRlsDate, titleEng, rating, company, director, actor, prodYear, movieId, movieSeq } = movie;
  const poster = posters.split('|')[0];
  const directorNm = director[0].directorNm;
  const actors = actor.splice(0, 5);
  const ratingGrade = rating[0].ratingGrade;
  let real_title = title.replaceAll(' !HS ', '');
  real_title = real_title.replaceAll(' !HE ', '');
  let real_repRlsDate = repRlsDate.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
  const noImage = '/sylog/noimage.gif';
  return (
    <Item>
      <List>
        <li>{real_title} <em>{titleEng && <span>{titleEng}</span>}{prodYear && <span>{prodYear} 년</span>}</em></li>
        <li>
          <span>{type}</span>
          <span><b>{ratingGrade}</b></span>
          <span>{nation + ' · ' + runtime + '분'}</span>
          <span className="reqRlsDate">{real_repRlsDate}</span>
        </li>
        <li>
          <dl>
            <dt>제작사</dt>
            <dd>{company}</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>감독</dt>
            <dd>{directorNm}</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>출연</dt>
            <dd>{actors.map((actor, index) => <span key={index}>{actor.actorNm}</span>)}</dd>
          </dl>
        </li>
        <li>
          <a href={`https://www.kmdb.or.kr/db/kor/detail/movie/${movieId}/${movieSeq}`} target="_blank" rel="noopener noreferrer"><FiExternalLink />자세히 보기</a>
        </li>
      </List>
      <Poster><img src={poster ? poster : noImage} alt={real_title} /></Poster>
    </Item>
  );
});

export default function SearchMovieResult({ movies }) {
  return (
    < >
      <Total>총 <b>{`${movies.TotalCount}개`}</b>의 영화를 찾았습니다.</Total>
      {
        (movies.Data[0].TotalCount === 0) ? <div className="Error"><span></span>검색결과 없..다!!</div> :
          movies.Data[0].Result.map((movie, index) => (
            <MovieItem key={index} movie={movie} />
        ))
      }
    </>
  );
}
