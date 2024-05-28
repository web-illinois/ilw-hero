import { css } from 'lit';

export default css`

.hero {
  position: relative;
}

.background {
  position: relative;
  width: 100%;
  height: var(--ilw-hero--height, 223px);
  background-color: var(--ilw-hero--background);
}

.background.collapse {
  display: none;
}

img {
  display: block; 
  position: relative;
  object-fit: cover;
  object-position: center;
}

.content-outer {
  background: var(--ilw-hero--background);
  position: relative;
  z-index: 100;
  padding: 0 20px;
}

.content-inner {
  padding: 18px 0 36px 0;
}

@media (min-width: 576px) {
    .content-inner {
        padding: 36px 0px 72px;
    }
}

@media (min-width: 767px) {
  .background {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .background img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 101;
  }
  .background.collapse {
    display: block;
  }


  .content-outer {
    background: transparent;
    height: var(--ilw-hero--height, 223px);
    display: flex;
  }

  .content-inner {
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    max-width: 1200px;
  }

  .content-inner.left {
    text-align: left;
    align-items: flex-start;
    margin-left: 100px;
  }

  .content-inner.right {
    text-align: right;
    align-items: flex-end;
    margin-right: 100px;
  }

  .content-inner.top {
    margin-top: 0;
  }

  .content-inner.bottom {
    margin-bottom: 0;
  }
  .content-inner.top-left {
    text-align: left;
    align-items: flex-start;
    margin: 0 auto auto 100px;
  }

  .content-inner.top-right {
    text-align: left;
    align-items: flex-start;
    margin: 0 100px auto auto;
  }

  .content-inner.bottom-left {
    text-align: right;
    align-items: flex-end;
    margin: auto auto 0 100px;
  }

  .content-inner.bottom-right {
    text-align: right;
    align-items: flex-end;
    margin: auto 100px 0 auto;
  }
}

@media (min-width: 992px) {
  .content-inner {
    width: var(--ilw-hero--text-width);
  }
}
`;