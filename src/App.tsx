import { css } from '@emotion/react';
import { BsPrinterFill } from 'react-icons/bs';
import { useMediaQuery } from 'usehooks-ts';

import { Resume } from './Resume';
import { Button } from './Button';

import '@joaopmo/react-paper/css/base';
import '@joaopmo/react-paper/css/print';

function App() {
  const sm = useMediaQuery('only screen and (max-width : 768px)');
  const md = useMediaQuery('only screen and (min-width : 769px) and (max-width : 1200px)');

  const pageWidth = sm ? 0.95 : md ? 0.8 : 0.7;
  const margin = sm ? '2.5%' : md ? '10%' : '15%';

  function print() {
    window.print();
  }

  return (
    <div
      css={css`
        background-color: ghostwhite;
      `}
    >
      <div
        css={css`
          max-width: 1920px;
          padding: 2rem 0;

          button {
            margin: 0 0 2rem ${margin};
          }

          .rp-page {
            padding: 3rem 2.5rem;
            gap: 2rem;
          }
          .rp-column {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .rp-column-1 {
            flex-grow: 5;
          }
          .rp-column-2 {
            flex-grow: 10;
          }
        `}
      >
        <Button icon={<BsPrinterFill />} onClick={print}>
          Imprimir
        </Button>
        <Resume pageWidth={pageWidth} />
      </div>
    </div>
  );
}

export default App;
