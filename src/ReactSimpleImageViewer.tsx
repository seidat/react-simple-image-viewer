import React from 'react';
import { Wrapper, Content, Slide, Image, Close, Prev, Next } from './styles';

interface IProps {
  src: string[];
  currentIndex?: number;
  backgroundStyle?: any;
  onClose: () => void;
}

interface IState {
  currentIndex: number;
}

export default class ReactSimpleImageViewer extends React.Component<IProps, IState> {
  imageRef: React.RefObject<HTMLImageElement>;

  constructor(props: IProps) {
    super(props);

    this.imageRef = React.createRef();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.callOnClose = this.callOnClose.bind(this);

    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('wheel', this.handleWheel);

    this.state = {
      currentIndex: this.props.currentIndex === undefined
        ? 0
        : this.props.currentIndex,
    };
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('wheel', this.handleWheel);
  }

  componentDidMount() {
    const image = this.imageRef.current;
    if(image && image.complete) {
      image.style.backgroundColor = 'white';
      image.style.backgroundImage = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAC5JREFUKJFjZGBgMGbAAv7//38WmzgTNkF8YDhoYPz//z92CUZGrKE3CP1Aew0AglIHR56J6mgAAAAASUVORK5CYII=')`;
    }
  }

  private changeImage(direction: number) {
    let nextIndex = this.state.currentIndex + direction;

    if (nextIndex > this.props.src.length - 1) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = this.props.src.length - 1;
    }

    this.setState({
      currentIndex: nextIndex,
    });
  }

  private callOnClose() {
    if (this.props.onClose !== undefined) {
      this.props.onClose();
    }
  }

  private handleKeyDown(event: any) {
    if (event.key === 'Escape') {
      this.callOnClose();
    }

    if (['ArrowLeft', 'h'].includes(event.key)) {
      this.changeImage(-1);
    }

    if (['ArrowRight', 'l'].includes(event.key)) {
      this.changeImage(1);
    }
  }

  private handleClick(event: any) {
    if (event.target && event.target.id === 'ReactSimpleImageViewer') {
      this.callOnClose();
    }
  }

  private handleWheel(event: any) {
    if (event.wheelDeltaY > 0) {
      this.changeImage(-1);
    } else {
      this.changeImage(1);
    }
  }

  render() {
    const { src } = this.props;
    const { currentIndex } = this.state;

    return (
      <Wrapper
        id="ReactSimpleImageViewer"
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        className="react-simple-image-viewer__modal"
        style={this.props.backgroundStyle}
      >
        <Close className="react-simple-image-viewer__close" onClick={this.callOnClose}>
          &times;
        </Close>

        {src.length > 1 && <Prev className="react-simple-image-viewer__previous" onClick={() => this.changeImage(-1)}>
          &#10094;
        </Prev>}

        {src.length > 1 && <Next className="react-simple-image-viewer__next" onClick={() => this.changeImage(1)}>
          &#10095;
        </Next>}

        <Content className="react-simple-image-viewer__modal-content">
          <Slide className="react-simple-image-viewer__slide">
            <Image src={src[currentIndex]} alt="" ref={this.imageRef} />
          </Slide>
        </Content>
      </Wrapper>
    );
  }
}
