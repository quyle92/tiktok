import React, { useState } from 'react';



function TodoList() {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));
        return storageJobs ?? [];
    });
    const [jobEditIndex, setJobEditIndex] = useState();
    const submitJob = (e) => {
        if (e.key === 'Enter') {
            if (job.length < 1) return;
            //update job
            if (jobEditIndex !== undefined) {
                jobs.splice(jobEditIndex, 1, job);
                setJobs(jobs);
                setJobEditIndex();
                localStorage.setItem('jobs', JSON.stringify(jobs))
            } else {
                //add new job
                setJobs((prev) => {
                    const newJobs = [...prev, job];
                    localStorage.setItem('jobs', JSON.stringify(newJobs))
                    return newJobs;
                });
            }

            setJob('')
        }
    }
    const removeJob = (index) => {
        setJobs((prev) => {
            prev.splice(index, 1);
            localStorage.setItem('jobs', JSON.stringify(prev))
            return [...prev];
        });
    }

    const editJob = (index) => {
        const job = jobs.find((job, i) => index === i);
        setJob(job);
        setJobEditIndex(index);
    }
    return (
        <div style={{ padding: 32 }}>
            <input onKeyDown={submitJob} onChange={(event) => setJob(event.target.value)} value={job} />
            <p>Job:</p>
            <ul>
                {
                    jobs.map((job, index) => {
                        return (
                            <div key={index}>
                                <li>
                                    {job}
                                    <button onClick={() => removeJob(index)}>x</button>
                                    <button onClick={() => editJob(index)}>edit</button>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;