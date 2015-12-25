var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c89a84a3-d6d5-44cd-83c5-d0512d32b7cf', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: c89a84a3-d6d5-44cd-83c5-d0512d32b7cf<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3427b02d'},
{id: '06bfe409-57ce-4df3-b76b-feb088dd232c', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 06bfe409-57ce-4df3-b76b-feb088dd232c<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3427b02d'},
{id: '3ed5bc45-051b-4fca-b83c-aca6f6bbedf4', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: 3ed5bc45-051b-4fca-b83c-aca6f6bbedf4<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'},
{id: '8daf4245-6217-4024-b06d-85946edf3930', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 8daf4245-6217-4024-b06d-85946edf3930<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3427b02d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8daf4245-6217-4024-b06d-85946edf3930', to: '3ed5bc45-051b-4fca-b83c-aca6f6bbedf4'},
{from: '06bfe409-57ce-4df3-b76b-feb088dd232c', to: '3ed5bc45-051b-4fca-b83c-aca6f6bbedf4'},
{from: '3ed5bc45-051b-4fca-b83c-aca6f6bbedf4', to: 'c89a84a3-d6d5-44cd-83c5-d0512d32b7cf'}
                            ]);