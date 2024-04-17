/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf1e6" block="ひらがな＿エージェント"
namespace hiragana_agent {

    //% blockId=hiragana_agent_8
    //% block="エージェントをじぶんのいちにいどうする "
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
        let p_pos = player.Position
        let tp_pos = p_pos + t_pos
        return agent.teleport(tp_pos, NORTH);
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
    export function place(direction: SixDirection): void {
        return agent.place(direction);
    }

    //% blockId=hiragana_agent_1
    //% block="エージェントのむきを $direction にかえる"
    export function turn(direction: TurnDirection): void {
        return agent.turn(direction);
    }


    //% blockID=hiragana_agent_0
    //% block="エージェントに $direction に $blocks ブロックいどうさせる"
    //% blocks.defl=1
    export function move(direction: SixDirection, blocks: number): void {
        return agent.move(direction, blocks);
    }
}

/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf04b" block="エージェントチェック"
namespace agentInspectDetect {
    //% blockId=agentInspect_2
    //% block="エージェントの $direction の $kind ブロック"
    export function agentInspect(kind: AgentInspection, direction: SixDirection): number {
        return agent.inspect(kind, direction);
    }

    //% blockId=agentDetect_1
    //% block="エージェントの $direction に $kind がある"
    export function agentDetect(kind: AgentDetection, direction: SixDirection): boolean {
        return agent.detect(kind, direction);
    }
}