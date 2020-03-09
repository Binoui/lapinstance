import { FormGroup, HTMLSelect, TextArea } from "@blueprintjs/core"
import { DatePicker } from "@blueprintjs/datetime"
import React, { useState } from "react"
import MomentLocaleUtils from "react-day-picker/moment"
import { useHistory } from "react-router-dom"
import { Raid, RaidType } from "../../api"
import { client } from "../../api/client"
import { raidTypeLabels, RaidTypes } from "../../api/utils"
import { Routes } from "../../Routes"
import { ActionButton } from "../ActionButton"

export const RaidEdit: React.FC<{ raid: Raid }> = props => {
    const [raidType, setRaidType] = useState(props.raid.raidType)
    const [date, setDate] = useState(props.raid.date)
    const [comment, setComment] = useState(props.raid.comment)
    const history = useHistory()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const raid: Raid = {
            id: props.raid.id,
            raidType,
            date,
            comment
        }
        client.raids.saveRaid(raid).then(() => history.push(Routes.raid.list.create({})))
    }

    const handleCancel = () => history.push(Routes.raid.list.create({}))

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormGroup label="Raid">
                    <HTMLSelect value={raidType} onChange={e => setRaidType(e.target.value as RaidType)}>
                        {RaidTypes.map(type => (
                            <option key={type} value={type}>
                                {raidTypeLabels[type]}
                            </option>
                        ))}
                    </HTMLSelect>
                </FormGroup>

                <FormGroup label="Date">
                    <DatePicker
                        highlightCurrentDay
                        canClearSelection={false}
                        locale="fr"
                        localeUtils={MomentLocaleUtils}
                        value={new Date(date)}
                        onChange={date => setDate(date.getTime())}
                        timePrecision="minute"
                    />
                </FormGroup>

                <FormGroup label="Commentaire">
                    <TextArea fill value={comment} onChange={e => setComment(e.target.value)} />
                </FormGroup>

                <ActionButton intent="primary" type="submit" text="Enregistrer" marginRight />
                <ActionButton text="Annuler" onClick={handleCancel} />
            </form>
        </>
    )
}