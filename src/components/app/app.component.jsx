import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';
import { createInstance, OptimizelyProvider } from '@optimizely/react-sdk';

// import child components
import { Counter } from '../counter';

let isServerSide = false;

if (typeof(process) != "undefined") {
  isServerSide = process.env.IS_SERVER_SIDE === 'true';
}

let sdkOptions = {};
if (isServerSide) {
  // initialize with given datafile on server.
  sdkOptions = {
    datafile: {"version": "4", "rollouts": [{"experiments": [{"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18419990161", "key": "18419990161", "featureEnabled": true}], "id": "18406080164", "key": "18406080164", "layerId": "16108441245", "trafficAllocation": [{"entityId": "18419990161", "endOfRange": 10000}], "forcedVariations": {}}], "id": "16108441245"}, {"experiments": [{"status": "Running", "audienceIds": [], "variations": [{"variables": [{"id": "17903790893", "value": ""}, {"id": "17893211989", "value": ""}], "id": "18410200058", "key": "18410200058", "featureEnabled": true}], "id": "18408210133", "key": "18408210133", "layerId": "17884040970", "trafficAllocation": [{"entityId": "18410200058", "endOfRange": 10000}], "forcedVariations": {}}], "id": "17884040970"}, {"experiments": [{"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18427410069", "key": "18427410069", "featureEnabled": true}], "id": "18409960251", "key": "18409960251", "layerId": "17907090111", "trafficAllocation": [], "forcedVariations": {}}], "id": "17907090111"}, {"experiments": [{"status": "Running", "audienceIds": [], "variations": [{"variables": [{"id": "18691071302", "value": "0"}], "id": "18616522283", "key": "18616522283", "featureEnabled": true}], "id": "18683540672", "key": "18683540672", "layerId": "18608871481", "trafficAllocation": [{"entityId": "18616522283", "endOfRange": 10000}], "forcedVariations": {}}], "id": "18608871481"}, {"experiments": [{"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18610741968", "key": "18610741968", "featureEnabled": true}], "id": "18641662485", "key": "18641662485", "layerId": "18608881875", "trafficAllocation": [], "forcedVariations": {}}], "id": "18608881875"}, {"experiments": [{"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18628382594", "key": "18628382594", "featureEnabled": true}], "id": "18683521295", "key": "18683521295", "layerId": "18622222848", "trafficAllocation": [], "forcedVariations": {}}], "id": "18622222848"}, {"experiments": [{"status": "Running", "audienceIds": [], "variations": [{"variables": [{"id": "19732624478", "value": "Not Enabled"}, {"id": "19734884008", "value": "false"}], "id": "18651202400", "key": "18651202400", "featureEnabled": true}], "id": "18622212233", "key": "18622212233", "layerId": "18630362526", "trafficAllocation": [], "forcedVariations": {}}], "id": "18630362526"}, {"experiments": [{"status": "Running", "audienceIds": [], "variations": [{"variables": [{"id": "18920432514", "value": "false"}], "id": "18639782478", "key": "18639782478", "featureEnabled": true}], "id": "18647302449", "key": "18647302449", "layerId": "18658421516", "trafficAllocation": [{"entityId": "18639782478", "endOfRange": 10000}], "forcedVariations": {}}], "id": "18658421516"}], "typedAudiences": [{"id": "17904951382", "conditions": ["and", ["or", ["or", {"value": null, "type": "custom_attribute", "name": "as", "match": "exists"}]]], "name": "Audience one"}], "anonymizeIP": true, "projectId": "16127820949", "variables": [], "featureFlags": [{"experimentIds": [], "rolloutId": "16108441245", "variables": [], "id": "16137770343", "key": "cute-feature"}, {"experimentIds": [], "rolloutId": "17884040970", "variables": [{"defaultValue": "", "type": "string", "id": "17893211989", "key": "name"}, {"defaultValue": "", "type": "string", "id": "17903790893", "key": "age"}], "id": "17864261029", "key": "another_feature"}, {"experimentIds": [], "rolloutId": "17907090111", "variables": [], "id": "17886410048", "key": "hack_demo"}, {"experimentIds": ["18639731563"], "rolloutId": "18608871481", "variables": [{"defaultValue": "0", "type": "integer", "id": "18691071302", "key": "height"}], "id": "18624532074", "key": "new_tab_bar"}, {"experimentIds": ["18634842318"], "rolloutId": "18622222848", "variables": [], "id": "18624743251", "key": "search_filter"}, {"experimentIds": ["18637602682"], "rolloutId": "18608881875", "variables": [], "id": "18646022147", "key": "warning_popup_2"}, {"experimentIds": ["18616763092"], "rolloutId": "18630362526", "variables": [{"defaultValue": "Not Enabled", "type": "string", "id": "19732624478", "key": "str_var"}, {"defaultValue": "false", "type": "boolean", "id": "19734884008", "key": "var1"}], "id": "18647752452", "key": "big_buy_button"}, {"experimentIds": ["18651792024"], "rolloutId": "18658421516", "variables": [{"defaultValue": "false", "type": "boolean", "id": "18920432514", "key": "isWhatever"}], "id": "18649752518", "key": "spell_check"}], "experiments": [{"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "16132090063", "key": "variation_1"}, {"variables": [], "id": "16120470043", "key": "variation_2"}], "id": "16128270092", "key": "playground-test", "layerId": "16124200173", "trafficAllocation": [{"entityId": "16120470043", "endOfRange": 5000}, {"entityId": "16132090063", "endOfRange": 10000}], "forcedVariations": {}}, {"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "17926820959", "key": "variation_1"}, {"variables": [], "id": "17955120307", "key": "variation_2"}, {"variables": [], "id": "17949280662", "key": "v3"}], "id": "17953001516", "key": "abtest2", "layerId": "17936470921", "trafficAllocation": [{"entityId": "17926820959", "endOfRange": 3333}, {"entityId": "17949280662", "endOfRange": 5000}, {"entityId": "17955120307", "endOfRange": 8333}, {"entityId": "17949280662", "endOfRange": 10000}], "forcedVariations": {}}, {"status": "Running", "audienceIds": [], "variations": [{"variables": [{"id": "19732624478", "value": "variation one"}, {"id": "19734884008", "value": "true"}], "id": "18630142331", "key": "variation_1", "featureEnabled": true}, {"variables": [], "id": "18637591406", "key": "variation_2", "featureEnabled": false}], "id": "18616763092", "key": "big_buy_button_test", "layerId": "18639732177", "trafficAllocation": [{"entityId": "18630142331", "endOfRange": 5000}, {"entityId": "18637591406", "endOfRange": 10000}], "forcedVariations": {}}, {"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18630481975", "key": "variation_1"}, {"variables": [], "id": "18687311728", "key": "variation_2"}], "id": "18622672360", "key": "liquid-ui", "layerId": "18647852837", "trafficAllocation": [{"entityId": "18630481975", "endOfRange": 5000}, {"entityId": "18687311728", "endOfRange": 10000}], "forcedVariations": {}}, {"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18630512464", "key": "variation_1"}, {"variables": [], "id": "18649143144", "key": "variation_2"}], "id": "18622672361", "key": "weekly-discount", "layerId": "18651672966", "trafficAllocation": [{"entityId": "18630512464", "endOfRange": 5000}, {"entityId": "18649143144", "endOfRange": 10000}], "forcedVariations": {}}, {"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18622373509", "key": "variation_1", "featureEnabled": false}, {"variables": [], "id": "18649632341", "key": "variation_2", "featureEnabled": true}], "id": "18634842318", "key": "search_filter_test", "layerId": "18641982587", "trafficAllocation": [{"entityId": "18622373509", "endOfRange": 5000}, {"entityId": "18649632341", "endOfRange": 10000}], "forcedVariations": {}}, {"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18643751940", "key": "variation_1", "featureEnabled": false}, {"variables": [], "id": "18679741978", "key": "variation_2", "featureEnabled": true}], "id": "18637602682", "key": "warning_popup_2_test", "layerId": "18651742053", "trafficAllocation": [{"entityId": "18643751940", "endOfRange": 5000}, {"entityId": "18679741978", "endOfRange": 10000}], "forcedVariations": {}}, {"status": "Running", "audienceIds": [], "variations": [{"variables": [{"id": "18691071302", "value": "50"}], "id": "18636111678", "key": "classic", "featureEnabled": true}, {"variables": [{"id": "18691071302", "value": "100"}], "id": "18655091927", "key": "modern", "featureEnabled": true}], "id": "18639731563", "key": "new_tab_bar_test", "layerId": "18624492384", "trafficAllocation": [{"entityId": "18636111678", "endOfRange": 5000}, {"entityId": "18655091927", "endOfRange": 10000}], "forcedVariations": {}}, {"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18647872366", "key": "variation_1"}, {"variables": [], "id": "18628532729", "key": "variation_2"}], "id": "18645982061", "key": "funky-theme", "layerId": "18624623621", "trafficAllocation": [{"entityId": "18628532729", "endOfRange": 5000}, {"entityId": "18647872366", "endOfRange": 10000}], "forcedVariations": {}}, {"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18622582830", "key": "variation_1"}, {"variables": [], "id": "18608842889", "key": "variation_2"}], "id": "18647572421", "key": "november-offer", "layerId": "18647522346", "trafficAllocation": [{"entityId": "18608842889", "endOfRange": 5000}, {"entityId": "18622582830", "endOfRange": 10000}], "forcedVariations": {}}, {"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "18641592657", "key": "variation_1", "featureEnabled": false}, {"variables": [{"id": "18920432514", "value": "false"}], "id": "18628522380", "key": "variation_2", "featureEnabled": true}], "id": "18651792024", "key": "spell_check_test", "layerId": "18645592546", "trafficAllocation": [{"entityId": "18628522380", "endOfRange": 5000}, {"entityId": "18641592657", "endOfRange": 10000}], "forcedVariations": {}}], "audiences": [{"id": "17904951382", "conditions": "[\"or\", {\"match\": \"exact\", \"name\": \"$opt_dummy_attribute\", \"type\": \"custom_attribute\", \"value\": \"$opt_dummy_value\"}]", "name": "Audience one"}, {"conditions": "[\"or\", {\"match\": \"exact\", \"name\": \"$opt_dummy_attribute\", \"type\": \"custom_attribute\", \"value\": \"$opt_dummy_value\"}]", "id": "$opt_dummy_audience", "name": "Optimizely-Generated Audience for Backwards Compatibility"}], "groups": [], "attributes": [{"id": "17909010136", "key": "as"}], "botFiltering": false, "accountId": "8272261422", "events": [{"experimentIds": [], "id": "18628161071", "key": "buy-click"}, {"experimentIds": [], "id": "18630443105", "key": "help-click"}, {"experimentIds": [], "id": "18635602459", "key": "checkout-complete"}, {"experimentIds": [], "id": "18642171978", "key": "unsubscribe"}, {"experimentIds": [], "id": "18645812462", "key": "opt-in"}], "revision": "59"}
  }
} else {
  // initialize with sdk key and datafile manager on client
  sdkOptions = {
    sdkKey: 'C21hgjpHCdKVKQscVvRh6e',
    datafileOptions: {
      autoUpdate: true,
      updateInterval: 5000,
    }
  }
}

const optimizelyClient = createInstance(sdkOptions);

// export entry application component
export class App extends React.Component {
    constructor() {
        console.log( 'App.constructor()' );
        super();
    }

    // render view
    render() {
        console.log( 'App.render()' );        
        console.log(`IsServerSide: ${isServerSide}`);
        return (
          <OptimizelyProvider
            user={{ id: 'zeeshan' }}
            optimizely={ optimizelyClient }
            isServerSide={ isServerSide }
            timeout={ 3000 }
          >
            <div className='ui-app'>
                <Switch>
                    <Route
                        path='/'
                        exact={ true }
                        render={ () => <Counter name='Button Click Count'/> }
                    />
                </Switch>
                
            </div>
          </OptimizelyProvider>
        );
    }
}