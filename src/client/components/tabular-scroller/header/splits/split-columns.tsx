/*
 * Copyright 2017-2018 Allegro.pl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { findDimensionByName } from "../../../../../common/models/dimension/dimensions";
import { Essence } from "../../../../../common/models/essence/essence";
import { Corner } from "../../corner/corner";
import "./split-columns.scss";

interface SplitColumnsHeader {
  essence: Essence;
}

export const SplitColumnsHeader: React.SFC<SplitColumnsHeader> = ({ essence }) => {
  const { splits: { splits }, dataCube } = essence;

  return <Corner>
    <div className="header-split-columns">
      {splits.toArray().map(split => {
        const { reference } = split;
        const title = findDimensionByName(dataCube.dimensions, reference).title;
        return <span className="header-split-column" key={reference}>{title}</span>;
      })}
    </div>
  </Corner>;
};
