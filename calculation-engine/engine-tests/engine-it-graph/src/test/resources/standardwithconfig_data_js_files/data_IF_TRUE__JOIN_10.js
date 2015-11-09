var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd928fd13-ec59-4294-8636-545db1a5f09f', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: d928fd13-ec59-4294-8636-545db1a5f09f<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'},
{id: '1bf09f7c-e714-4345-801c-2057d9827058', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: 1bf09f7c-e714-4345-801c-2057d9827058<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'},
{id: 'cb26eeab-d8cd-4b17-976d-956e5fd4a0da', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: cb26eeab-d8cd-4b17-976d-956e5fd4a0da<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'},
{id: '4c8dcbe9-65d1-4e8d-b36c-e4d7e517013b', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: 4c8dcbe9-65d1-4e8d-b36c-e4d7e517013b<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'},
{id: 'e381662e-15cf-42ec-8bd8-c605105c0721', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: e381662e-15cf-42ec-8bd8-c605105c0721<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'},
{id: 'ec1e29f1-3a34-4350-832e-910d231de04d', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: ec1e29f1-3a34-4350-832e-910d231de04d<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1bf09f7c-e714-4345-801c-2057d9827058', to: 'cb26eeab-d8cd-4b17-976d-956e5fd4a0da'},
{from: 'e381662e-15cf-42ec-8bd8-c605105c0721', to: 'd928fd13-ec59-4294-8636-545db1a5f09f'},
{from: '4c8dcbe9-65d1-4e8d-b36c-e4d7e517013b', to: '1bf09f7c-e714-4345-801c-2057d9827058'},
{from: 'ec1e29f1-3a34-4350-832e-910d231de04d', to: 'd928fd13-ec59-4294-8636-545db1a5f09f'},
{from: 'd928fd13-ec59-4294-8636-545db1a5f09f', to: '1bf09f7c-e714-4345-801c-2057d9827058'}
                            ]);