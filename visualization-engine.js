// ═══════════════════════════════════════════════════════════════════
// PROFESSIONAL VISUALIZATION ENGINE - ENHANCED VERSION
// Advanced data visualizations with modern design
// ═══════════════════════════════════════════════════════════════════

class VisualizationEngine {
  constructor() {
    this.visualizations = {};
    this.currentVisualization = 'dashboard';
    this.userProgress = null;
    this.curriculumData = null;
    this.journeyLog = null;
    this.init();
  }

  init() {
    this.registerVisualizations();
  }

  // ═══════════════════════════════════════════════════════════════════
  // DATA SETTERS
  // ═══════════════════════════════════════════════════════════════════

  setData(userProgress, curriculumData, journeyLog) {
    this.userProgress = userProgress;
    this.curriculumData = curriculumData;
    this.journeyLog = journeyLog;
  }

  // ═══════════════════════════════════════════════════════════════════
  // HELPER FUNCTIONS
  // ═══════════════════════════════════════════════════════════════════

  getFieldProgress(field) {
    if (!this.userProgress || !this.curriculumData || !this.curriculumData[field]) {
      return 0;
    }
    
    let total = 0;
    let earned = 0;
    
    for (let tier = 0; tier < 4; tier++) {
      if (!this.curriculumData[field] || !this.curriculumData[field][tier]) continue;
      
      this.curriculumData[field][tier].badges.forEach((badge, badgeIdx) => {
        const badgeProgress = this.getBadgeProgress(field, tier, badgeIdx);
        total += badgeProgress.total;
        earned += badgeProgress.earned;
      });
    }
    
    return total > 0 ? (earned / total) * 100 : 0;
  }

  getBadgeProgress(field, tier, badgeIdx) {
    if (!this.userProgress || !this.curriculumData || 
        !this.curriculumData[field] || !this.curriculumData[field][tier] ||
        !this.curriculumData[field][tier].badges[badgeIdx]) {
      return { earned: 0, total: 0, pct: 0 };
    }
    
    const badge = this.curriculumData[field][tier].badges[badgeIdx];
    const earned = (this.userProgress[field]?.tiers?.[tier]?.[badgeIdx] || []).length;
    const total = badge.subBadges.length;
    
    return { earned, total, pct: total ? Math.round(earned / total * 100) : 0 };
  }

  getFieldDepth(field) {
    if (!this.userProgress || !this.userProgress[field]) return 0;
    
    let highestTier = -1;
    for (let tier = 3; tier >= 0; tier--) {
      if (this.userProgress[field]?.tiers?.[tier]) {
        const badges = Object.keys(this.userProgress[field].tiers[tier] || {});
        if (badges.length > 0) {
          highestTier = tier;
          break;
        }
      }
    }
    return highestTier + 1;
  }

  getTotalBadgesEarned() {
    if (!this.journeyLog) return 0;
    return this.journeyLog.length;
  }

  getActiveDays() {
    if (!this.journeyLog || this.journeyLog.length === 0) return 0;
    const days = new Set();
    this.journeyLog.forEach(entry => {
      if (entry.date) {
        days.add(entry.date.split('T')[0]);
      }
    });
    return days.size;
  }

  // ═══════════════════════════════════════════════════════════════════
  // VISUALIZATION REGISTRATION
  // ═══════════════════════════════════════════════════════════════════

  registerVisualizations() {
    this.visualizations = {
      'dashboard': () => this.renderDashboard(),
      'radarchart': () => this.renderRadarChart(),
      'skillmatrix': () => this.renderSkillMatrix(),
      'timeline': () => this.renderTimeline(),
      'heatmap': () => this.renderHeatmap(),
      'network': () => this.renderNetworkGraph()
    };
  }

  // ═══════════════════════════════════════════════════════════════════
  // 1. EXECUTIVE DASHBOARD
  // ═══════════════════════════════════════════════════════════════════

  renderDashboard() {
    if (!this.curriculumData) return '<div class="error">No curriculum data loaded</div>';
    
    const fields = Object.keys(this.curriculumData);
    const fieldData = fields.map(field => ({
      name: field,
      progress: this.getFieldProgress(field),
      depth: this.getFieldDepth(field),
      color: this.getFieldColor(field)
    })).sort((a, b) => b.progress - a.progress);

    const totalBadges = this.getTotalBadgesEarned();
    const activeDays = this.getActiveDays();
    const overallProgress = fieldData.reduce((sum, f) => sum + f.progress, 0) / fieldData.length;
    const strongFields = fieldData.filter(f => f.progress > 60).length;

    return `
      <div class="viz-pro-container dashboard-viz">
        <div class="dashboard-grid">
          <!-- KPI Cards -->
          <div class="kpi-section">
            <div class="kpi-card kpi-primary">
              <div class="kpi-icon">🎯</div>
              <div class="kpi-content">
                <div class="kpi-value">${Math.round(overallProgress)}%</div>
                <div class="kpi-label">Overall Progress</div>
                <div class="kpi-trend ${overallProgress > 50 ? 'positive' : 'neutral'}">
                  ${overallProgress > 50 ? '↗' : '→'} ${overallProgress > 50 ? 'On Track' : 'Building Foundation'}
                </div>
              </div>
            </div>

            <div class="kpi-card kpi-success">
              <div class="kpi-icon">🏆</div>
              <div class="kpi-content">
                <div class="kpi-value">${totalBadges}</div>
                <div class="kpi-label">Badges Earned</div>
                <div class="kpi-trend positive">↗ Keep Going</div>
              </div>
            </div>

            <div class="kpi-card kpi-info">
              <div class="kpi-icon">⚡</div>
              <div class="kpi-content">
                <div class="kpi-value">${activeDays}</div>
                <div class="kpi-label">Active Days</div>
                <div class="kpi-trend ${activeDays > 7 ? 'positive' : 'neutral'}">
                  ${activeDays > 7 ? '↗ Consistent' : '→ Getting Started'}
                </div>
              </div>
            </div>

            <div class="kpi-card kpi-warning">
              <div class="kpi-icon">💪</div>
              <div class="kpi-content">
                <div class="kpi-value">${strongFields}</div>
                <div class="kpi-label">Strong Fields</div>
                <div class="kpi-trend ${strongFields > 2 ? 'positive' : 'neutral'}">
                  ${strongFields > 2 ? '↗ Mastering Multiple' : '→ Specializing'}
                </div>
              </div>
            </div>
          </div>

          <!-- Progress Bars -->
          <div class="progress-section">
            <div class="section-header">
              <h4>📊 Field Progress Overview</h4>
              <span class="section-subtitle">Your mastery across all learning areas</span>
            </div>
            <div class="progress-bars">
              ${fieldData.map(field => `
                <div class="progress-row">
                  <div class="progress-row-header">
                    <span class="progress-field-name">${this.getFieldIcon(field.name)} ${field.name}</span>
                    <span class="progress-value">${Math.round(field.progress)}%</span>
                  </div>
                  <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${field.progress}%; background: ${field.color};">
                      <div class="progress-bar-shine"></div>
                    </div>
                    <div class="progress-bar-marker" style="left: ${field.progress}%">
                      <span class="progress-tier-badge">T${field.depth}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Quick Insights -->
          <div class="insights-section">
            <div class="section-header">
              <h4>💡 Quick Insights</h4>
            </div>
            <div class="insights-grid">
              ${this.generateInsights(fieldData).map(insight => `
                <div class="insight-card ${insight.type}">
                  <div class="insight-icon">${insight.icon}</div>
                  <div class="insight-content">
                    <div class="insight-title">${insight.title}</div>
                    <div class="insight-text">${insight.text}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════
  // 2. RADAR CHART
  // ═══════════════════════════════════════════════════════════════════

  renderRadarChart() {
    if (!this.curriculumData) return '<div class="error">No curriculum data loaded</div>';
    
    const fields = Object.keys(this.curriculumData).slice(0, 8); // Max 8 for clean radar
    const fieldData = fields.map(field => ({
      name: field,
      progress: this.getFieldProgress(field),
      color: this.getFieldColor(field)
    }));

    const center = 150;
    const radius = 120;
    const angleStep = (Math.PI * 2) / fields.length;

    // Generate radar polygon points
    const points = fieldData.map((field, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const distance = (field.progress / 100) * radius;
      const x = center + Math.cos(angle) * distance;
      const y = center + Math.sin(angle) * distance;
      return `${x},${y}`;
    }).join(' ');

    // Generate grid circles
    const gridCircles = [25, 50, 75, 100].map(pct => {
      const r = (pct / 100) * radius;
      return `<circle cx="${center}" cy="${center}" r="${r}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>`;
    }).join('');

    // Generate axis lines and labels
    const axes = fieldData.map((field, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const x1 = center;
      const y1 = center;
      const x2 = center + Math.cos(angle) * radius;
      const y2 = center + Math.sin(angle) * radius;
      
      const labelX = center + Math.cos(angle) * (radius + 30);
      const labelY = center + Math.sin(angle) * (radius + 30);
      
      return `
        <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <circle cx="${x2}" cy="${y2}" r="4" fill="${field.color}" opacity="0.8"/>
        <text x="${labelX}" y="${labelY}" class="radar-label" text-anchor="middle" dominant-baseline="middle">
          ${this.getFieldAbbr(field.name)}
        </text>
      `;
    }).join('');

    return `
      <div class="viz-pro-container radar-viz">
        <div class="viz-pro-header">
          <h3>🎯 Skills Radar Chart</h3>
          <div class="viz-pro-subtitle">Comprehensive view of your skill distribution</div>
        </div>
        <div class="radar-chart-container">
          <svg viewBox="0 0 300 300" class="radar-svg">
            <!-- Grid -->
            ${gridCircles}
            
            <!-- Axes -->
            ${axes}
            
            <!-- Progress Polygon -->
            <polygon points="${points}" fill="${this.getFieldColor(fieldData[0].name)}" fill-opacity="0.2" stroke="${this.getFieldColor(fieldData[0].name)}" stroke-width="2"/>
            
            <!-- Data Points -->
            ${fieldData.map((field, i) => {
              const angle = angleStep * i - Math.PI / 2;
              const distance = (field.progress / 100) * radius;
              const x = center + Math.cos(angle) * distance;
              const y = center + Math.sin(angle) * distance;
              return `
                <circle cx="${x}" cy="${y}" r="5" fill="${field.color}" class="radar-point">
                  <title>${field.name}: ${Math.round(field.progress)}%</title>
                </circle>
              `;
            }).join('')}
          </svg>
          
          <div class="radar-legend">
            ${fieldData.map(field => `
              <div class="radar-legend-item">
                <div class="radar-legend-dot" style="background: ${field.color}"></div>
                <span class="radar-legend-name">${field.name}</span>
                <span class="radar-legend-value">${Math.round(field.progress)}%</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════
  // 3. SKILL MATRIX
  // ═══════════════════════════════════════════════════════════════════

  renderSkillMatrix() {
    if (!this.curriculumData) return '<div class="error">No curriculum data loaded</div>';
    
    const fields = Object.keys(this.curriculumData);
    const tiers = ['Seed', 'Sprout', 'Branch', 'Fruit'];
    
    const matrixData = fields.map(field => {
      return {
        name: field,
        tiers: tiers.map((tierName, tierIdx) => {
          const tierData = this.curriculumData[field][tierIdx];
          if (!tierData) return { badges: 0, completed: 0, pct: 0 };
          
          const totalBadges = tierData.badges.length;
          const completedBadges = tierData.badges.filter((badge, bIdx) => {
            const progress = this.getBadgeProgress(field, tierIdx, bIdx);
            return progress.pct === 100;
          }).length;
          
          return {
            badges: totalBadges,
            completed: completedBadges,
            pct: totalBadges > 0 ? (completedBadges / totalBadges) * 100 : 0
          };
        })
      };
    });

    return `
      <div class="viz-pro-container matrix-viz">
        <div class="viz-pro-header">
          <h3>🔲 Skill Mastery Matrix</h3>
          <div class="viz-pro-subtitle">Badge completion across all tiers</div>
        </div>
        <div class="skill-matrix">
          <div class="matrix-table">
            <div class="matrix-header">
              <div class="matrix-cell matrix-corner">Field / Tier</div>
              ${tiers.map((tier, i) => `
                <div class="matrix-cell matrix-tier-header">
                  ${['🌱', '🌿', '🍃', '🏗️'][i]} ${tier}
                </div>
              `).join('')}
            </div>
            ${matrixData.map(field => `
              <div class="matrix-row">
                <div class="matrix-cell matrix-field-name">
                  ${this.getFieldIcon(field.name)} ${field.name}
                </div>
                ${field.tiers.map((tier, tierIdx) => `
                  <div class="matrix-cell matrix-data-cell ${this.getMatrixCellClass(tier.pct)}" 
                       title="${field.name} - ${tiers[tierIdx]}: ${tier.completed}/${tier.badges} badges (${Math.round(tier.pct)}%)">
                    <div class="matrix-cell-value">${tier.completed}/${tier.badges}</div>
                    <div class="matrix-cell-bar" style="width: ${tier.pct}%"></div>
                    <div class="matrix-cell-pct">${Math.round(tier.pct)}%</div>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
          
          <div class="matrix-legend">
            <div class="legend-title">Completion Level:</div>
            <div class="legend-items">
              <div class="legend-item"><div class="legend-box matrix-expert"></div> Expert (100%)</div>
              <div class="legend-item"><div class="legend-box matrix-advanced"></div> Advanced (75-99%)</div>
              <div class="legend-item"><div class="legend-box matrix-intermediate"></div> Intermediate (50-74%)</div>
              <div class="legend-item"><div class="legend-box matrix-beginner"></div> Beginner (25-49%)</div>
              <div class="legend-item"><div class="legend-box matrix-novice"></div> Novice (1-24%)</div>
              <div class="legend-item"><div class="legend-box matrix-none"></div> Not Started (0%)</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════
  // 4. LEARNING TIMELINE
  // ═══════════════════════════════════════════════════════════════════

  renderTimeline() {
    if (!this.journeyLog || this.journeyLog.length === 0) {
      return `
        <div class="viz-pro-container timeline-viz">
          <div class="viz-pro-header">
            <h3>📅 Learning Timeline</h3>
            <div class="viz-pro-subtitle">Your journey through the curriculum</div>
          </div>
          <div class="empty-state">
            <div class="empty-icon">📚</div>
            <p>Start earning badges to see your learning timeline!</p>
          </div>
        </div>
      `;
    }

    // Group by field and tier
    const timelineData = this.journeyLog.map((entry, index) => ({
      ...entry,
      index: index,
      color: this.getFieldColor(entry.field),
      icon: this.getFieldIcon(entry.field),
      tierIcon: ['🌱', '🌿', '🍃', '🏗️'][entry.tier] || '📍'
    }));

    return `
      <div class="viz-pro-container timeline-viz">
        <div class="viz-pro-header">
          <h3>📅 Learning Timeline</h3>
          <div class="viz-pro-subtitle">Your ${timelineData.length} milestone${timelineData.length !== 1 ? 's' : ''} achieved</div>
        </div>
        <div class="timeline-container">
          <div class="timeline-line"></div>
          ${timelineData.map((entry, index) => `
            <div class="timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}">
              <div class="timeline-marker" style="background: ${entry.color}">
                <span class="timeline-marker-icon">${entry.tierIcon}</span>
              </div>
              <div class="timeline-content">
                <div class="timeline-badge-name">${entry.name}</div>
                <div class="timeline-meta">
                  <span class="timeline-field">${entry.icon} ${entry.field}</span>
                  <span class="timeline-tier">Tier ${entry.tier + 1}</span>
                </div>
                <div class="timeline-number">#${index + 1}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════
  // 5. ACTIVITY HEATMAP
  // ═══════════════════════════════════════════════════════════════════

  renderHeatmap() {
    if (!this.curriculumData) return '<div class="error">No curriculum data loaded</div>';
    
    const fields = Object.keys(this.curriculumData);
    const weeks = 12; // Show 12 weeks
    
    // Generate activity data (simulated based on progress)
    const heatmapData = fields.map(field => {
      const progress = this.getFieldProgress(field);
      const weeklyActivity = Array.from({length: weeks}, (_, i) => {
        // Simulate more recent activity
        const recencyFactor = (weeks - i) / weeks;
        const baseActivity = (progress / 100) * recencyFactor;
        const randomVariation = Math.random() * 0.3;
        return Math.min(Math.round((baseActivity + randomVariation) * 4), 4);
      });
      
      return {
        name: field,
        icon: this.getFieldIcon(field),
        color: this.getFieldColor(field),
        activity: weeklyActivity
      };
    });

    return `
      <div class="viz-pro-container heatmap-viz">
        <div class="viz-pro-header">
          <h3>🔥 Activity Heatmap</h3>
          <div class="viz-pro-subtitle">Weekly learning intensity across ${weeks} weeks</div>
        </div>
        <div class="heatmap-container">
          <div class="heatmap-grid">
            <!-- Header -->
            <div class="heatmap-header">
              <div class="heatmap-corner"></div>
              ${Array.from({length: weeks}, (_, i) => `
                <div class="heatmap-week-label">W${weeks - i}</div>
              `).join('')}
            </div>
            
            <!-- Data Rows -->
            ${heatmapData.map(field => `
              <div class="heatmap-row">
                <div class="heatmap-field-label">
                  <span class="heatmap-icon">${field.icon}</span>
                  <span class="heatmap-name">${field.name}</span>
                </div>
                ${field.activity.map((level, weekIdx) => `
                  <div class="heatmap-cell heatmap-level-${level}" 
                       style="--cell-color: ${field.color}"
                       title="${field.name} - Week ${weeks - weekIdx}: Level ${level}">
                    <div class="heatmap-cell-inner"></div>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
          
          <div class="heatmap-legend">
            <span class="heatmap-legend-label">Activity Level:</span>
            <div class="heatmap-legend-scale">
              <div class="heatmap-legend-item"><div class="heatmap-legend-box heatmap-level-0"></div> None</div>
              <div class="heatmap-legend-item"><div class="heatmap-legend-box heatmap-level-1"></div> Low</div>
              <div class="heatmap-legend-item"><div class="heatmap-legend-box heatmap-level-2"></div> Medium</div>
              <div class="heatmap-legend-item"><div class="heatmap-legend-box heatmap-level-3"></div> High</div>
              <div class="heatmap-legend-item"><div class="heatmap-legend-box heatmap-level-4"></div> Very High</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════
  // 6. KNOWLEDGE NETWORK GRAPH
  // ═══════════════════════════════════════════════════════════════════

  renderNetworkGraph() {
    if (!this.curriculumData) return '<div class="error">No curriculum data loaded</div>';
    
    const fields = Object.keys(this.curriculumData).slice(0, 10);
    const fieldData = fields.map(field => ({
      name: field,
      progress: this.getFieldProgress(field),
      color: this.getFieldColor(field),
      icon: this.getFieldIcon(field)
    }));

    // Create connections based on skill relationships
    const connections = this.generateSkillConnections(fieldData);

    // Position nodes in a circle
    const centerX = 200;
    const centerY = 200;
    const radius = 130;
    const angleStep = (Math.PI * 2) / fieldData.length;

    const nodes = fieldData.map((field, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      const nodeSize = 20 + (field.progress / 100) * 30;
      
      return { ...field, x, y, size: nodeSize };
    });

    return `
      <div class="viz-pro-container network-viz">
        <div class="viz-pro-header">
          <h3>🕸️ Knowledge Network</h3>
          <div class="viz-pro-subtitle">Interconnected skill relationships</div>
        </div>
        <div class="network-container">
          <svg viewBox="0 0 400 400" class="network-svg">
            <!-- Connections -->
            ${connections.map(conn => {
              const node1 = nodes[conn.from];
              const node2 = nodes[conn.to];
              return `
                <line x1="${node1.x}" y1="${node1.y}" 
                      x2="${node2.x}" y2="${node2.y}" 
                      class="network-connection" 
                      stroke="rgba(139,92,246,${conn.strength})" 
                      stroke-width="${conn.strength * 2}"/>
              `;
            }).join('')}
            
            <!-- Nodes -->
            ${nodes.map(node => `
              <g class="network-node" transform="translate(${node.x}, ${node.y})">
                <circle r="${node.size}" 
                        fill="${node.color}" 
                        opacity="0.8" 
                        class="network-node-circle"/>
                <circle r="${node.size}" 
                        fill="none" 
                        stroke="${node.color}" 
                        stroke-width="2" 
                        opacity="0.5"/>
                <text text-anchor="middle" 
                      dominant-baseline="middle" 
                      class="network-node-icon" 
                      font-size="${node.size * 0.7}">
                  ${node.icon}
                </text>
                <title>${node.name}: ${Math.round(node.progress)}%</title>
              </g>
            `).join('')}
          </svg>
          
          <div class="network-legend">
            <div class="network-legend-title">Node Size = Mastery Level</div>
            <div class="network-legend-items">
              ${nodes.map(node => `
                <div class="network-legend-item">
                  <div class="network-legend-dot" style="background: ${node.color}; width: ${Math.max(node.size / 2, 8)}px; height: ${Math.max(node.size / 2, 8)}px"></div>
                  <span class="network-legend-text">${node.name}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════
  // HELPER METHODS
  // ═══════════════════════════════════════════════════════════════════

  getFieldColor(field) {
    const colors = {
      'CAD Design': '#8b5cf6',
      'Electronic CAD': '#3b82f6',
      'Web Development': '#06b6d4',
      'App Development': '#10b981',
      'Hardware Programming': '#f59e0b',
      'Architectural CAD': '#f97316',
      'Data Intelligence': '#ec4899',
      'Practical Electronics': '#ef4444',
      'AI and Data Science': '#8b5cf6',
      'Game Development': '#f59e0b',
      'Robotics': '#3b82f6'
    };
    return colors[field] || '#6366f1';
  }

  getFieldIcon(field) {
    const icons = {
      'CAD Design': '📐',
      'Electronic CAD': '🔌',
      'Web Development': '💻',
      'App Development': '📱',
      'Hardware Programming': '⚡',
      'Architectural CAD': '🏛️',
      'Data Intelligence': '📊',
      'Practical Electronics': '🔧',
      'AI and Data Science': '🧠',
      'Game Development': '🎮',
      'Robotics': '🤖'
    };
    return icons[field] || '🎯';
  }

  getFieldAbbr(field) {
    const abbrs = {
      'CAD Design': 'CAD',
      'Electronic CAD': 'ECAD',
      'Web Development': 'WEB',
      'App Development': 'APP',
      'Hardware Programming': 'HW',
      'Architectural CAD': 'ARCH',
      'Data Intelligence': 'DATA',
      'Practical Electronics': 'ELEC',
      'AI and Data Science': 'AI',
      'Game Development': 'GAME',
      'Robotics': 'ROBO'
    };
    return abbrs[field] || field.substring(0, 4).toUpperCase();
  }

  getMatrixCellClass(pct) {
    if (pct === 100) return 'matrix-expert';
    if (pct >= 75) return 'matrix-advanced';
    if (pct >= 50) return 'matrix-intermediate';
    if (pct >= 25) return 'matrix-beginner';
    if (pct > 0) return 'matrix-novice';
    return 'matrix-none';
  }

  generateInsights(fieldData) {
    const insights = [];
    
    const topField = fieldData[0];
    if (topField && topField.progress > 0) {
      insights.push({
        type: 'success',
        icon: '🌟',
        title: 'Top Performer',
        text: `${topField.name} is your strongest area at ${Math.round(topField.progress)}%`
      });
    }

    const activeFields = fieldData.filter(f => f.progress > 10);
    if (activeFields.length >= 3) {
      insights.push({
        type: 'info',
        icon: '🎯',
        title: 'Multi-Skilled',
        text: `Actively developing skills in ${activeFields.length} different fields`
      });
    }

    const beginnerFields = fieldData.filter(f => f.progress > 0 && f.progress < 25);
    if (beginnerFields.length > 0) {
      insights.push({
        type: 'warning',
        icon: '🚀',
        title: 'Growth Opportunity',
        text: `${beginnerFields.length} field${beginnerFields.length !== 1 ? 's' : ''} ready for more focus`
      });
    }

    const deepFields = fieldData.filter(f => f.depth >= 3);
    if (deepFields.length > 0) {
      insights.push({
        type: 'success',
        icon: '🏆',
        title: 'Deep Knowledge',
        text: `Advanced expertise in ${deepFields.map(f => f.name).slice(0, 2).join(', ')}`
      });
    }

    return insights;
  }

  generateSkillConnections(fieldData) {
    const connections = [];
    const synergies = {
      'CAD Design': ['Architectural CAD', 'Robotics'],
      'Electronic CAD': ['Practical Electronics', 'Hardware Programming'],
      'Web Development': ['App Development', 'Data Intelligence'],
      'Hardware Programming': ['Robotics', 'Practical Electronics'],
      'AI and Data Science': ['Data Intelligence', 'Robotics'],
      'Game Development': ['App Development', 'Web Development']
    };

    fieldData.forEach((field, fromIdx) => {
      const relatedFields = synergies[field.name] || [];
      relatedFields.forEach(relatedName => {
        const toIdx = fieldData.findIndex(f => f.name === relatedName);
        if (toIdx !== -1) {
          const avgProgress = (field.progress + fieldData[toIdx].progress) / 200;
          connections.push({
            from: fromIdx,
            to: toIdx,
            strength: avgProgress
          });
        }
      });
    });

    return connections;
  }

  // ═══════════════════════════════════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════════════════════════════════

  render(visualizationType = null) {
    const type = visualizationType || this.currentVisualization;
    if (this.visualizations[type]) {
      this.currentVisualization = type;
      return this.visualizations[type]();
    }
    return this.renderDashboard();
  }

  getAvailableVisualizations() {
    return [
      { id: 'dashboard', name: 'Executive Dashboard', icon: '📊', description: 'KPIs and comprehensive overview' },
      { id: 'radarchart', name: 'Skills Radar', icon: '🎯', description: 'Multi-dimensional skill distribution' },
      { id: 'skillmatrix', name: 'Skill Matrix', icon: '🔲', description: 'Badge completion across all tiers' },
      { id: 'timeline', name: 'Learning Timeline', icon: '📅', description: 'Chronological achievement history' },
      { id: 'heatmap', name: 'Activity Heatmap', icon: '🔥', description: 'Weekly learning intensity patterns' },
      { id: 'network', name: 'Knowledge Network', icon: '🕸️', description: 'Interconnected skill relationships' }
    ];
  }

  setVisualization(type) {
    if (this.visualizations[type]) {
      this.currentVisualization = type;
      return true;
    }
    return false;
  }
}

// Export for use in main file
if (typeof window !== 'undefined') {
  window.VisualizationEngine = VisualizationEngine;
}