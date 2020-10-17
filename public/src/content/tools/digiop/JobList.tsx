import React, {useEffect, useState} from "react";
import {Broker, Feature} from "../../../lib/model/DigiOp";
import {Arg as Argument} from "../../../lib/model/DigiOp"
import {Form, Select, Typography} from "antd";
import ListNavigator from "../../../components/ListNavigator";
import Arg from "./joblist/Arg";

export default (props:any) => {

    const brokers:Broker[] = props.brokers

    const [features, setFeatures] = useState <Feature[]>(brokers[0].features)
    const [jobs, setJobs] = useState <Feature[]>(props.jobs)
    const [currentJobId, setCurrentJobId] = useState (0)

    useEffect(() => {
        if(jobs.length === 0) setCurrentJobId(-1)
    }, [jobs])

    useEffect(() => {
        jobs[0] && setFeatures(jobs[currentJobId].broker!.features)
    }, [currentJobId])

    function brokerSelected(key: string) {
        const broker = brokers.find((broker:Broker) => broker.path === key)
        setCurrentJob(broker!.features[0])
        setFeatures(broker!.features)
    }

    function featureSelected (key: string) {
        const feature = jobs[currentJobId].broker.features.find((job: Feature) => job.key === key)
        setCurrentJob(feature!)
    }

    function setCurrentJob (job:Feature) {
        const res = jobs.slice()
        res[currentJobId] = job
        setJobs(res)
        props.jobsChanged(res)
    }

    function addToJobs (insertCallback:Function) {
        setJobs(insertCallback(brokers[0].features[0]))
    }

    function changeCurrentJob (id: number) {
        setCurrentJobId(id)
    }

    function changeJobs (jobs:Feature[]) {
        setJobs(jobs)
    }

    function argChanged (arg:Argument) {
        const ix = jobs[currentJobId].args.findIndex((a:Argument) => a.key === arg.key)
        jobs[currentJobId].args[ix] = arg
        setCurrentJob(jobs[currentJobId])
    }

    return (
        <div key={currentJobId}>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0', marginTop:'9px'}}>
                <Typography.Title style={{marginBottom:'3px'}} level={3}>Jobs</Typography.Title>
                <ListNavigator
                    key={currentJobId}
                    list={jobs}
                    currentId={currentJobId}
                    onAddToList={addToJobs}
                    onListChanged={changeJobs}
                    onChangeCurrent={changeCurrentJob}
                />
            </div>
            {jobs.length > 0 &&
                <>
                    <Form.Item
                        label="Broker"
                        rules={[{required: true, message: ' '}]}
                    >
                        <Select style={{width: '100%'}} onChange={brokerSelected} value={jobs[0] && jobs[currentJobId].broker!.path}>
                            {brokers.map((broker) => <Select.Option key={broker.path} value={broker.path}>{broker.path}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <div key={currentJobId}>
                        <Form.Item
                            label="Feature"
                            rules={[{required: true, message: ' '}]}
                        >
                            <Select style={{width: '100%'}} onChange={featureSelected}
                                    value={jobs[0] && jobs[currentJobId].key}>
                                {features.map((feature: Feature) => <Select.Option key={feature.key}
                                                                                   value={feature.key}>{feature.label}</Select.Option>)}
                            </Select>
                        </Form.Item>
                        {jobs[currentJobId] && jobs[currentJobId].args.map((arg: Argument) =>
                            <Arg key={arg.key} arg={arg} argChanged={argChanged}/>
                        )}
                    </div>
            </>
            }
        </div>
    )
}
