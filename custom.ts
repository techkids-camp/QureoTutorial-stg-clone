/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf1e6" block="ひらがな＿エージェント"
namespace hiragana_agent {

    //% blockId=hiragana_agent_8
    //% block="エージェントをじぶんのいちにもどす"
    export function teleportToPlayer(): void {
        return agent.teleportToPlayer();
    }

    //% blockId=hiragana_agent_7
    //% block="エージェントの $direction の　$kind  "
    export function inspect(kind: AgentInspection, direction: SixDirection): number {
        return agent.inspect(kind, direction);
    }

    //% blockId=hiragana_agent_6
    //% block="エージェントの  $direction　に　$kind  がある"
    export function detect(kind: AgentDetection, direction: SixDirection): boolean {
        return agent.detect(kind, direction);
    }

    //% blockId=hiragana_agent_5
    //% block="エージェントをいまのいちから %t_pos=minecraftCreatePosition にテレポートさせる"
    export function teleport(t_pos: Position): void {
        let agentTrune: CompassDirection
        let agentOrient = agent.getOrientation()
        if (agentOrient == 0){
            agentTrune = SOUTH
        }else if (agentOrient == -180){
            agentTrune = NORTH
        }else if (agentOrient == -90){
            agentTrune = EAST
        }else if (agentOrient == 90){
            agentTrune = WEST
        } else {
            agentTrune = SOUTH
        }
        return agent.teleport(positions.add(agent.getPosition(),t_pos), agentTrune);
    }

    //% blockId=hiragana_agent_4
    //% block="スロットばんごう $slot をセットする"
    export function setSlot(slot: number): void {
        return agent.setSlot(slot);
    }

    //% blockId=hiragana_agent_3
    //% block=" エージェントに $direction をはかいさせる"
    export function destroy(direction: SixDirection): void {
        return agent.destroy(direction);
    }

    //% blockId=hiragana_agent_2
    //% block="エージェントに $direction へおかせる"
    //% block.loc.ja="日本語だぜ $direction へおかせる"
    //% block.loc.fr="オフランス $direction へおかせる"
    //% block.loc.en="englishyeah $direction へおかせる"
    export function place(direction: SixDirection): void {
        return agent.place(direction);
    }

    //% blockId=hiragana_agent_1
    //% block="エージェントのむきを $direction にかえる"
    export function turn(direction: TurnDirection): void {
        return agent.turn(direction);
    }


    //% blockID=hiragana_agent_0
    //% block="エージェントを $direction に $blocks ブロックいどうさせる"
    //% blocks.defl=1
    export function move(direction: SixDirection, blocks: number): void {
        return agent.move(direction, blocks);
    }
}