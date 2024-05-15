import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import { Data } from './JsonData';

// create Plotly React component via dependency injection
const Plot = createPlotlyComponent(Plotly);

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);

const Home = (props) => {
    const [state, setState] = useState(props);

    return (
        <PivotTableUI
            data={Data}
            onChange={s => setState(s)}
            renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
            {...state}
        />
    );
};

export default Home;
