import { SVGProps } from 'react';

export const TheMiracle = ({
  color,
  size,
  ...props
}: {
  color?: string | undefined;
  size: number;
} & SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    style={{ enableBackground: 'new 0 0 512 512' } as React.CSSProperties}
    xmlSpace="preserve"
  >
    <style type="text/css">
      {`
        .st0 { fill: ${color}; }
        .st1 { fill: ${color}; }
        .st2 { fill: ${color}; }
        .st3 { fill: ${color}; }
      `}
    </style>
    <path className="st0" d="M407.4,200.3c-11.3-2.4-22.1-5.7-32.1-9.7c-12-5.3-23.3-11.9-33.6-19.6c-10.3-8.2-19.7-17.7-28.1-28.2
    c-9.6-12.8-17.9-27.1-24.6-42.5c-2.1-5.2-4.1-10.5-5.7-15.6l-5.8-17.5l-3.4,18.1c-4,21.6-10.1,41.9-18.2,60.4l-1,2.2l1.2,2.1
    c6.4,10.9,14,21.5,22.4,31.6c15.7,18.9,35.4,35.2,57,47l0,0c0,0,0,0,0,0l3.2,1.7l2.1-0.9c14.9-6.5,27.4-11,39.3-14.2
    c8.5-2.3,17.5-4.2,26.9-5.8l24.5-4.1L407.4,200.3z"/>
    <path className="st1" d="M32.8,290c7.5,0.6,15.2,0.4,22.7,0.1c21-1,42.2-4.1,62.5-9.5c13.6-3.7,26.7-8.7,39.7-14.4
    c11.4-5,22.4-11.1,32.7-18.2c27.8-19.3,51.2-44.3,67.3-74.2C278.1,135.3,287,92.4,289,49.2c0.3-5.8,0.4-11.6,0.4-17.3
    c0-8.2-3.6-16.7-9.3-22.5c-5.5-5.5-14.6-9.7-22.5-9.3c-8.2,0.4-16.8,3.1-22.5,9.3c-5.7,6.2-9.3,13.9-9.3,22.5
    c0,15.4-0.9,30.7-2.9,46c0.4-2.8,0.8-5.6,1.1-8.5c-2.9,21.7-8.2,43-16.6,63.2c1.1-2.5,2.1-5.1,3.2-7.6c-6.3,15-14.4,29.1-24.3,42
    c1.7-2.1,3.3-4.3,5-6.4c-9.2,11.9-19.9,22.6-31.8,31.8c2.1-1.7,4.3-3.3,6.4-5c-13.2,10.2-27.8,18.5-43.1,24.9
    c2.5-1.1,5.1-2.1,7.6-3.2c-15.7,6.6-32.1,11.3-48.9,14.4c-4.1,0.8-8.2,1.4-12.4,2c2.8-0.4,5.6-0.8,8.5-1.1
    c-14,1.9-28.2,2.8-42.3,2.1c-0.8,0-1.7-0.1-2.5-0.2c-7.7-0.7-17.2,4-22.5,9.3c-5.5,5.5-9.7,14.6-9.3,22.5c0.4,8.2,3.1,16.8,9.3,22.5
    c2.1,1.7,4.3,3.3,6.4,5C21.7,288.5,27,289.9,32.8,290L32.8,290z"/>
    <path className="st2" d="M257,354.6c-5.5-8.6-11.7-17.1-18.4-25.2c-15.7-18.9-35.4-35.2-57-47c-1.6-0.9-3.1-1.7-4.7-2.5l-2-1l-3.2,1.5
    c-0.4,0.2-0.8,0.4-1.2,0.5c-15.2,6.7-28,11.3-40.2,14.6c-7.7,2.1-15.9,3.9-24.3,5.3l-25.1,4.4l25,4.9c12.6,2.5,24.7,6,35.9,10.5
    c12,5.3,23.3,11.9,33.6,19.6c10.3,8.2,19.7,17.7,28.1,28.2c9.6,12.8,17.9,27.1,24.6,42.5c0.5,1.3,1,2.6,1.6,3.9l5.6,14.4l3.4-15.1
    c4.4-19.6,10.6-38,18.5-54.9l1.1-2.3L257,354.6z"/>
    <path className="st3" d="M479.2,222c-7.5-0.6-15.2-0.4-22.7-0.1c-21,1-42.2,4.1-62.5,9.5c-13.6,3.7-26.7,8.7-39.7,14.4
    c-11.4,5-22.4,11.1-32.7,18.2c-27.8,19.3-51.2,44.3-67.3,74.2c-20.5,38.3-29.4,81.3-31.4,124.5c-0.3,5.8-0.4,11.6-0.4,17.3
    c0,8.2,3.6,16.7,9.3,22.5c5.5,5.5,14.6,9.7,22.5,9.3c8.2-0.4,16.8-3.1,22.5-9.3c5.7-6.2,9.3-13.9,9.3-22.5c0-15.4,0.9-30.7,2.9-46
    c-0.4,2.8-0.8,5.6-1.1,8.5c2.9-21.7,8.2-43,16.6-63.2c-1.1,2.5-2.1,5.1-3.2,7.6c6.3-15,14.4-29.1,24.3-42c-1.7,2.1-3.3,4.3-5,6.4
    c9.2-11.9,19.9-22.6,31.8-31.8c-2.1,1.7-4.3,3.3-6.4,5c13.2-10.2,27.8-18.5,43.1-24.9c-2.5,1.1-5.1,2.1-7.6,3.2
    c15.7-6.6,32.1-11.3,48.9-14.4c4.1-0.8,8.2-1.4,12.4-2c-2.8,0.4-5.6,0.8-8.5,1.1c14-1.9,28.2-2.8,42.3-2.1c0.8,0,1.7,0.1,2.5,0.2
    c7.7,0.7,17.2-4,22.5-9.3c5.5-5.5,9.7-14.6,9.3-22.5c-0.4-8.2-3.1-16.8-9.3-22.5c-2.1-1.7-4.3-3.3-6.4-5
    C490.3,223.5,485,222.1,479.2,222L479.2,222z"/>
    </svg>
);