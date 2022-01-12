import React from 'react';
import Header from '../components/Header';
import MagicHat from '../hat_magic.png';

const HomePage = () => (
  <section className="home">
    <Header />
    <main>
      <h2>
        Welcome to our page!
      </h2>
      <p>
        Ut congue convallis massa eget rhoncus.
        Vivamus interdum semper lacus, at viverra ante porttitor in.
        Nullam mattis egestas justo, tempus efficitur massa luctus a.
        Praesent mollis vehicula vehicula. Aliquam in justo faucibus,
        efficitur neque nec, convallis tortor. Sed dapibus turpis ac
        massa commodo egestas. Praesent id eros urna. Praesent sed
        auctor dolor. Morbi condimentum euismod augue nec varius.
        Mauris mollis tincidunt massa. Mauris et orci quis nisl porta finibus.
        Etiam accumsan vulputate lobortis. Mauris non nunc ultrices
        metus vulputate iaculis. Vivamus ultrices arcu et nulla ultricies,
        sit amet luctus dui mattis. Nunc blandit tincidunt congue
      </p>

      <p>
        Sed ac metus fermentum nisi lacinia sodales. Nullam porta
        tristique justo et laoreet. Vestibulum pulvinar, purus a finibus
        commodo, quam lectus imperdiet arcu, vel sollicitudin augue ligula
        quis lorem. Nunc vehicula lectus nec quam interdum, vitae mattis
        sapien iaculis. Duis et dui sed lorem hendrerit sollicitudin.
        Donec ut justo tincidunt, finibus nisi ut, fringilla augue. Donec
        a nibh nec libero pellentesque semper et vel lacus. Integer quis
        magna quam
      </p>
      <img src={MagicHat} alt="Magic Hat" />
    </main>
  </section>
);
export default HomePage;
