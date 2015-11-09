var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '38795d61-a99b-4765-a4b4-61b9726bddb7', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 38795d61-a99b-4765-a4b4-61b9726bddb7<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: '51545558-66a8-4002-8086-4a8a071aea11', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 51545558-66a8-4002-8086-4a8a071aea11<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: '552e2471-9135-4547-9396-a292f6909173', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: 552e2471-9135-4547-9396-a292f6909173<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: '6a5f0627-76cb-4320-ad1a-40af6bb7a5c4', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 6a5f0627-76cb-4320-ad1a-40af6bb7a5c4<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: 'b0fecf6c-c5ce-4017-9a5b-9ac47460d55d', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: b0fecf6c-c5ce-4017-9a5b-9ac47460d55d<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: 'd7221012-9353-48f5-927a-1bc0f6498fb2', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: d7221012-9353-48f5-927a-1bc0f6498fb2<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: 'bfb62f22-fda6-40f9-ad40-848483f7cc83', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: bfb62f22-fda6-40f9-ad40-848483f7cc83<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: '1986b1fb-827a-4d16-ab77-8ad5a6d2c746', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1986b1fb-827a-4d16-ab77-8ad5a6d2c746<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bfb62f22-fda6-40f9-ad40-848483f7cc83', to: 'd7221012-9353-48f5-927a-1bc0f6498fb2'},
{from: 'd7221012-9353-48f5-927a-1bc0f6498fb2', to: 'b0fecf6c-c5ce-4017-9a5b-9ac47460d55d'},
{from: '552e2471-9135-4547-9396-a292f6909173', to: '6a5f0627-76cb-4320-ad1a-40af6bb7a5c4'},
{from: 'b0fecf6c-c5ce-4017-9a5b-9ac47460d55d', to: '6a5f0627-76cb-4320-ad1a-40af6bb7a5c4'},
{from: '6a5f0627-76cb-4320-ad1a-40af6bb7a5c4', to: '51545558-66a8-4002-8086-4a8a071aea11'},
{from: '1986b1fb-827a-4d16-ab77-8ad5a6d2c746', to: 'b0fecf6c-c5ce-4017-9a5b-9ac47460d55d'},
{from: '38795d61-a99b-4765-a4b4-61b9726bddb7', to: 'd7221012-9353-48f5-927a-1bc0f6498fb2'}
                            ]);