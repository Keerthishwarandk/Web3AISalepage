import * as React from 'react';
import Collabrate from './flexcomponents/Collaborate';
import Discover from './flexcomponents/Discover';
import Influence from './flexcomponents/Influence';

export default function MultiActionAreaCard() {
  return (
    <div class="flex justify-center  flex-row ...">

    <Collabrate/>
    <Discover/>
    <Influence/>

    </div>
  );
}
