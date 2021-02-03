import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0px 60px 0px 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  box-sizing: border-box;
`;

export const Content = styled.div`
  margin: auto;
  padding: 0;
  width: 90%;
  height: 100%;
  max-height: 100%;
  text-align: center;
`;

export const Slide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  background-color: white;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAC5JREFUKJFjZGBgMGbAAv7//38WmzgTNkF8YDhoYPz//z92CUZGrKE3CP1Aew0AglIHR56J6mgAAAAASUVORK5CYII=')
`;

export const Close = styled.span`
  color: white;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 40px;
  font-weight: bold;
  opacity: .2;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const Navigation = styled.span`
  height: 80%;
  color: white;
  cursor: pointer;
  position: absolute;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: .2;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  &:hover {
    opacity: 1;
  }
`;

export const Prev = styled(Navigation as any)`
  left: 0;
`;

export const Next = styled(Navigation as any)`
  right: 0;
`;
