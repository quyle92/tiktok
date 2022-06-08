import React, {
    useState,
    useEffect,
    useRef,
    useReducer,
    useMemo,
    memo,
    useCallback,
    useImperativeHandle,
    forwardRef,
    useTransition,
} from 'react';
import images from '~/assets/images';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(fallback);
    };
    return (
        <img
            ref={ref}
            src={_fallback || src}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string.isRequired,
    fallback: PropTypes.string,
};

Image.displayName = 'Image';

export default Image;
