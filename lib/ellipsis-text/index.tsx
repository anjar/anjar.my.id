import { FunctionComponent } from 'react';

type Props = {
  text: string;
  length: number;
  tail?: string;
  tailClassName?: string;
};

const EllipsisText:FunctionComponent<Props> = ({
  text, length, tail, tailClassName, ...others
} : Props) => {
  if (text.length <= length || length < 0) {
    return <span {...others}>{text}</span>;
  }

  const tailStyle = {
    cursor: 'auto',
  };

  let displayText;
  if (typeof tail !== 'undefined') {
    if (length - tail.length <= 0) {
      displayText = '';
    } else {
      displayText = text.slice(0, (length - tail.length));
    }
  } else {
    displayText = '';
  }

  return (
    <span title={text} {...others}>
      {displayText}
      <span
        style={tailStyle}
        className={tailClassName}
      >
        {tail}
      </span>
    </span>
  );
};

EllipsisText.defaultProps = {
  tail: '...',
  tailClassName: 'more',
};

export default EllipsisText;
