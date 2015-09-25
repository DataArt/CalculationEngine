package com.dataart.spreadsheetanalytics.api.model;

import java.util.Iterator;
import java.util.List;

public interface IDsRow extends Iterable<IDsCell>, Iterator<IDsCell> {

    int index();
    
    int width();
    
    List<IDsCell> cells();
    
}
