
import React from 'react'; 
import { Card } from 'primereact/card';

export default function Post() {
    return (
        <div className="card">
             {/* className="md:w-25rem" */}
            <Card title="מטעים לי ">
                <p className="m-0">
                  אתר חלומי שמפגיש שפים מנוסים עם לקוחות שמבינים
                </p>
            </Card>
        </div>
    )
}
        