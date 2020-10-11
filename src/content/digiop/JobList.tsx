import React, {useEffect, useState} from "react";
import {Arg, Datatype, Broker, Job} from "../../lib/digiop/Broker";
import {Form, Input, InputNumber, Select, Typography} from "antd";
import ListNavigator from "../../components/ListNavigator";
import {EndpointType} from "../../lib/data/digiop";

export default (props:any) => {

    const brokers:Broker[] = props.brokers

    const initialJob = brokers[0].features[0]

    const [features, setFeatures] = useState <Job[]>(brokers[0].features)
    const [jobs, setJobs] = useState <Job[]>(props.jobs)
    const [currentJobId, setCurrentJobId] = useState (0)

    useEffect(() => {
        jobs[0] && setFeatures(jobs[currentJobId].broker.features)
    }, [currentJobId])

    function brokerSelected(key: string) {
        const broker = brokers.find((broker:Broker) => broker.path === key)
        console.log(broker)
        setCurrentJob(broker!.features[0])
        setFeatures(broker!.features)
    }

    function featureSelected (key: string) {
        const feature = jobs[currentJobId].broker.features.find((job: Job) => job.key === key)
        console.log(feature)
        setCurrentJob(feature!)
    }

    function setCurrentJob (job:Job) {
        const res = jobs.slice()
        res[currentJobId] = job
        setJobs(res)
    }

    function addToJobs (insertJobCallback:Function) {
        setJobs(insertJobCallback(brokers[0].features[0]))
    }

    function changeCurrentJob (id: number) {
        setCurrentJobId(id)
    }

    function changeJobs (jobs:Job[]) {
        setJobs(jobs)
    }

    const Payload = (props:{job:Job}) => {
        console.log(props.job)
        const Prop = (props: {arg:Arg, payload:any}) => {
            switch (props.arg.datatype) {
                case Datatype.String:
                    return <Input.TextArea style={{height:'40px'}} autoSize rows={1} value={props.arg.payload as string} />
                case Datatype.Number:
                    return <InputNumber style={{width:'50px'}} placeholder={'Weeks'} />
                case Datatype.Time:
                    return <div style={{display:'flex', maxWidth:'20px!important', width:'20px!important'}}>
                        <InputNumber style={{maxWidth:'20px'}} placeholder={'Weeks'} />
                    </div>
            }
            return <></>
        }

        return (
            <>
                {props.job && Object.values(props.job.args).map((arg:Arg) =>
                    <Form.Item
                        key={arg.label}
                        label={arg.label[0].toUpperCase() + arg.label.slice(1)}
                        rules={[{ required: true, message: <></> }]}
                    >
                        <Prop arg={arg} payload={arg.payload}/>
                    </Form.Item>
                )}
            </>
        )
    }

    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0', marginTop:'9px'}}>
                <Typography.Title style={{marginBottom:'3px'}} level={3}>Jobs</Typography.Title>
                <ListNavigator
                    key={currentJobId}
                    list={jobs}
                    currentId={currentJobId}
                    onAddToList={addToJobs}
                    onListChanged={changeJobs}
                    onChangeCurrent={changeCurrentJob} />
            </div>
            <Form.Item
                label="Broker"
                rules={[{ required: true, message: ' ' }]}
                // initialValue={brokers[0].path}
            >
                <Select style={{width:'100%'}} onChange={brokerSelected} value={(jobs[0]) && jobs[currentJobId].broker.path}>
                    {brokers.map((broker) => <Select.Option key={broker.path} value={broker.path}>{broker.path}</Select.Option>)}
                </Select>
            </Form.Item>
            <Form.Item
                label="Feature"
                rules={[{ required: true, message: ' ' }]}
                // initialValue={features[0]}
            >
                <Select style={{width:'100%'}} onChange={featureSelected} value={jobs[0] && jobs[currentJobId].key}>
                    {features.map((feature:Job) => <Select.Option key={feature.key} value={feature.key}>{feature.label}</Select.Option>)}
                </Select>
            </Form.Item>
            <Payload key={jobs[0] && jobs[currentJobId].label} job={jobs[currentJobId]}/>
        </div>
    )
}
