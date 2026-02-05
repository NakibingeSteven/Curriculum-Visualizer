// ═══════════════════════════════════════════════════════════════════
// INTELLIGENT MULTI-LEVEL RECOMMENDATION ENGINE
// ═══════════════════════════════════════════════════════════════════

// Extended Career Interest Profiles (30+ diverse paths)
const CAREER_INTEREST_PROFILES = {
  // Core Engineering
  'Mechanical Design Engineer': {
    icon: '⚙️',
    description: 'Design mechanical systems, components, and mechanisms',
    weights: {
      'CAD Design': 0.9,
      'Practical Electronics': 0.6,
      'Robotics': 0.5,
      'Game Development': 0.3,
      'Architectural CAD': 0.3
    }
  },

  'Electronics Design Engineer': {
    icon: '🔌',
    description: 'Design analog/digital circuits and electronic systems',
    weights: {
      'Electronic CAD': 0.9,
      'Practical Electronics': 0.8,
      'Hardware Programming': 0.7,
      'Robotics': 0.5,
      'Data Intelligence': 0.3
    }
  },

  'Embedded Systems Developer': {
    icon: '💾',
    description: 'Program microcontrollers and low-level hardware systems',
    weights: {
      'Hardware Programming': 0.9,
      'Practical Electronics': 0.8,
      'Electronic CAD': 0.7,
      'Robotics': 0.6,
      'App Development': 0.4
    }
  },

  'Control Systems Engineer': {
    icon: '🎛️',
    description: 'Design feedback control systems for automation',
    weights: {
      'Robotics': 0.8,
      'Hardware Programming': 0.7,
      'AI and Data Science': 0.6,
      'Practical Electronics': 0.6,
      'Data Intelligence': 0.5
    }
  },

  'RF/Wireless Engineer': {
    icon: '📡',
    description: 'Design radio frequency and wireless communication systems',
    weights: {
      'Electronic CAD': 0.9,
      'Practical Electronics': 0.7,
      'Hardware Programming': 0.5,
      'Data Intelligence': 0.4,
      'AI and Data Science': 0.3
    }
  },

  // Software & Computing
  'Full-Stack Developer': {
    icon: '💻',
    description: 'Build complete web applications front to back',
    weights: {
      'Web Development': 0.9,
      'App Development': 0.7,
      'Data Intelligence': 0.6,
      'AI and Data Science': 0.5,
      'Game Development': 0.4
    }
  },

  'Mobile App Developer': {
    icon: '📱',
    description: 'Create applications for iOS and Android platforms',
    weights: {
      'App Development': 0.9,
      'Web Development': 0.6,
      'Game Development': 0.5,
      'Hardware Programming': 0.3,
      'Practical Electronics': 0.2
    }
  },

  'Game Engine Developer': {
    icon: '🎮',
    description: 'Build game engines and graphics systems',
    weights: {
      'Game Development': 0.9,
      'App Development': 0.7,
      'Web Development': 0.5,
      'Hardware Programming': 0.4,
      'AI and Data Science': 0.4
    }
  },

  'Data Engineer': {
    icon: '📊',
    description: 'Design data pipelines and infrastructure',
    weights: {
      'Data Intelligence': 0.9,
      'AI and Data Science': 0.7,
      'Web Development': 0.5,
      'Hardware Programming': 0.3,
      'Electronic CAD': 0.2
    }
  },

  'Machine Learning Engineer': {
    icon: '🤖',
    description: 'Design and deploy machine learning models',
    weights: {
      'AI and Data Science': 0.9,
      'Data Intelligence': 0.8,
      'Robotics': 0.6,
      'Web Development': 0.4,
      'Game Development': 0.3
    }
  },

  // Hardware & Robotics
  'Robotics Perception Engineer': {
    icon: '👁️',
    description: 'Develop computer vision and sensor systems for robots',
    weights: {
      'Robotics': 0.9,
      'AI and Data Science': 0.8,
      'Hardware Programming': 0.6,
      'Practical Electronics': 0.5,
      'Electronic CAD': 0.4
    }
  },

  'Automation Engineer': {
    icon: '🔄',
    description: 'Design industrial automation and control systems',
    weights: {
      'Robotics': 0.8,
      'Practical Electronics': 0.7,
      'Hardware Programming': 0.6,
      'Electronic CAD': 0.5,
      'CAD Design': 0.4
    }
  },

  'Drone Systems Engineer': {
    icon: '🚁',
    description: 'Design autonomous aerial vehicle systems',
    weights: {
      'Robotics': 0.9,
      'Practical Electronics': 0.7,
      'Hardware Programming': 0.6,
      'Electronic CAD': 0.5,
      'AI and Data Science': 0.5
    }
  },

  'PCB Layout Specialist': {
    icon: '🔋',
    description: 'Design printed circuit board layouts for manufacturing',
    weights: {
      'Electronic CAD': 0.9,
      'Practical Electronics': 0.7,
      'Hardware Programming': 0.4,
      'CAD Design': 0.3,
      'Robotics': 0.2
    }
  },

  'Power Electronics Engineer': {
    icon: '⚡',
    description: 'Design power conversion and distribution systems',
    weights: {
      'Practical Electronics': 0.9,
      'Electronic CAD': 0.7,
      'Hardware Programming': 0.5,
      'Robotics': 0.4,
      'Data Intelligence': 0.3
    }
  },

  // Design & Architecture
  'Product Designer': {
    icon: '✏️',
    description: 'Design physical products from concept to production',
    weights: {
      'CAD Design': 0.8,
      'Architectural CAD': 0.6,
      'Practical Electronics': 0.5,
      'Game Development': 0.4,
      'Web Development': 0.3
    }
  },

  'Architectural Technologist': {
    icon: '🏛️',
    description: 'Design building systems and construction documentation',
    weights: {
      'Architectural CAD': 0.9,
      'CAD Design': 0.6,
      'Practical Electronics': 0.4,
      'Data Intelligence': 0.3,
      'Web Development': 0.2
    }
  },

  'Technical Animator': {
    icon: '🎬',
    description: 'Create animations and simulations for engineering',
    weights: {
      'Game Development': 0.8,
      'CAD Design': 0.7,
      'Architectural CAD': 0.5,
      'Web Development': 0.4,
      'Robotics': 0.3
    }
  },

  'Simulation Engineer': {
    icon: '📐',
    description: 'Create engineering simulations and virtual testing',
    weights: {
      'CAD Design': 0.8,
      'Game Development': 0.7,
      'Robotics': 0.6,
      'AI and Data Science': 0.5,
      'Data Intelligence': 0.4
    }
  },

  // Emerging Fields
  'IoT Solutions Architect': {
    icon: '🌐',
    description: 'Design connected device ecosystems and networks',
    weights: {
      'Hardware Programming': 0.8,
      'Electronic CAD': 0.7,
      'Web Development': 0.6,
      'Data Intelligence': 0.6,
      'Practical Electronics': 0.5
    }
  },

  'AR/VR Developer': {
    icon: '👓',
    description: 'Create augmented and virtual reality experiences',
    weights: {
      'Game Development': 0.9,
      'App Development': 0.7,
      'Web Development': 0.6,
      'Hardware Programming': 0.4,
      'AI and Data Science': 0.4
    }
  },

  'Digital Fabrication Specialist': {
    icon: '🛠️',
    description: 'Design for 3D printing, CNC, and automated manufacturing',
    weights: {
      'CAD Design': 0.8,
      'Architectural CAD': 0.7,
      'Practical Electronics': 0.5,
      'Robotics': 0.5,
      'Hardware Programming': 0.4
    }
  },

  'Technical Educator': {
    icon: '👨‍🏫',
    description: 'Teach STEM skills and develop educational content',
    weights: {
      'Practical Electronics': 0.7,
      'Web Development': 0.6,
      'App Development': 0.6,
      'CAD Design': 0.5,
      'Game Development': 0.5
    }
  },

  'STEM Content Creator': {
    icon: '🎥',
    description: 'Create educational videos and technical content',
    weights: {
      'Web Development': 0.7,
      'Game Development': 0.6,
      'App Development': 0.6,
      'Practical Electronics': 0.5,
      'CAD Design': 0.4
    }
  }
};

// ═══════════════════════════════════════════════════════════════════
// PATTERN DETECTION ENGINE
// ═══════════════════════════════════════════════════════════════════

function detectLearningPatterns() {
  const patterns = [];

  // 1. Dabbler Pattern (trying many fields but not deep)
  const fieldsTried = Object.keys(userProgress).filter(field =>
    hasAnyBadges(field)
  ).length;

  if (fieldsTried >= 6 && journeyLog.length < 10) {
    patterns.push({
      type: 'Explorer',
      description: 'You enjoy trying many different fields but haven\'t gone deep into any one yet',
      confidence: 0.8,
      recommendation: 'Consider focusing on 2-3 fields for the next month to build deeper skills'
    });
  }

  // 2. Specialist Pattern (deep in one field)
  const fieldProgress = {};
  Object.keys(CURRICULUM_DATA).forEach(field => {
    fieldProgress[field] = calculateFieldCompletion(field);
  });

  const sortedFields = Object.entries(fieldProgress)
    .sort((a, b) => b[1] - a[1]);

  if (sortedFields[0][1] > 40 && sortedFields[1][1] < 10) {
    patterns.push({
      type: 'Specialist',
      description: `You\'re deeply focused on ${sortedFields[0][0]} with ${Math.round(sortedFields[0][1])}% completion`,
      confidence: 0.9,
      recommendation: 'Great depth! Consider exploring adjacent fields to become a T-shaped engineer'
    });
  }

  // 3. Tier Progress Pattern (completing tiers systematically)
  const tierPattern = analyzeTierProgress();
  if (tierPattern.consistent) {
    patterns.push({
      type: 'Methodical Learner',
      description: 'You progress systematically through tiers, mastering fundamentals before advancing',
      confidence: tierPattern.confidence,
      recommendation: 'Continue your structured approach - it builds strong foundations'
    });
  }

  // 4. Cross-Field Connection Pattern
  const connections = findCrossFieldConnections();
  if (connections.length > 3) {
    patterns.push({
      type: 'Integrative Thinker',
      description: 'You naturally connect skills across different fields',
      confidence: 0.7,
      recommendation: 'Leverage your cross-disciplinary thinking on complex projects'
    });
  }

  // 5. Acceleration Pattern (fast progress in recent period)
  if (journeyLog.length >= 5) {
    const recentLog = journeyLog.slice(-5);
    const timeframe = calculateTimeframe(recentLog);
    if (timeframe < 14) { // Less than 2 weeks for 5 badges
      patterns.push({
        type: 'Accelerated Learner',
        description: 'You\'re learning at a rapid pace recently',
        confidence: 0.8,
        recommendation: 'Maintain momentum! Consider more challenging badges in your strongest fields'
      });
    }
  }

  return patterns;
}

function analyzeTierProgress() {
  let consistentCount = 0;
  let totalFields = 0;

  Object.keys(CURRICULUM_DATA).forEach(field => {
    if (hasAnyBadges(field)) {
      const highestTier = getCurrentTierInField(field);
      const lowerTiersComplete = Array.from({ length: highestTier }, (_, i) => i)
        .every(tier => getTierCompleted(field, tier) === getTierTotalBadges(field, tier));

      if (lowerTiersComplete) consistentCount++;
      totalFields++;
    }
  });

  return {
    consistent: consistentCount > 0,
    confidence: totalFields > 0 ? consistentCount / totalFields : 0
  };
}

function findCrossFieldConnections() {
  const connections = [];

  // Find badges that bridge fields in user's journey
  journeyLog.forEach((entry, index) => {
    if (index > 0) {
      const prevEntry = journeyLog[index - 1];
      if (entry.field !== prevEntry.field) {
        connections.push({
          from: prevEntry.field,
          to: entry.field,
          badge: entry.name
        });
      }
    }
  });

  return connections;
}

// ═══════════════════════════════════════════════════════════════════
// INTEREST VECTOR CALCULATION
// ═══════════════════════════════════════════════════════════════════

function calculateUserInterestVector() {
  const vector = {};
  const totalWeight = {};

  // Initialize all fields
  Object.keys(CURRICULUM_DATA).forEach(field => {
    vector[field] = 0;
    totalWeight[field] = 0;
  });

  // Weight badges by tier (higher tiers = stronger interest signal)
  const tierWeights = [1.0, 1.5, 2.0, 3.0]; // Seed, Sprout, Branch, Fruiting

  Object.keys(userProgress).forEach(field => {
    for (let tier = 0; tier < 4; tier++) {
      const badges = userProgress[field].tiers[tier] || {};
      Object.keys(badges).forEach(badgeIdx => {
        const badgeKey = parseInt(badgeIdx);
        const subBadgesEarned = badges[badgeKey].length;
        const totalSubBadges = CURRICULUM_DATA[field][tier].badges[badgeKey].subBadges.length;

        if (subBadgesEarned > 0) {
          // Interest based on completion percentage and tier
          const completionRatio = subBadgesEarned / totalSubBadges;
          const weight = tierWeights[tier] * completionRatio;

          vector[field] += weight;
          totalWeight[field] += tierWeights[tier];
        }
      });
    }
  });

  // Normalize to 0-1 scale
  Object.keys(vector).forEach(field => {
    if (totalWeight[field] > 0) {
      vector[field] = vector[field] / totalWeight[field];
    }
  });

  return vector;
}

function calculateCareerMatchScores(interestVector) {
  const scores = {};

  Object.keys(CAREER_INTEREST_PROFILES).forEach(career => {
    const profile = CAREER_INTEREST_PROFILES[career];
    let matchScore = 0;
    let totalWeight = 0;
    let badgeScore = 0;

    // Calculate match based on interest weights
    Object.keys(profile.weights).forEach(field => {
      if (interestVector[field]) {
        matchScore += profile.weights[field] * interestVector[field];
        totalWeight += profile.weights[field];
      }
    });

    // Calculate badge progress score
    if (profile.badges) {
      profile.badges.forEach(badgeRef => {
        const prog = getBadgeProgress(badgeRef.field, badgeRef.tier, badgeRef.badge);
        const badgeWeight = [1.0, 1.5, 2.0, 3.0][badgeRef.tier];
        badgeScore += (prog.earned / prog.total) * badgeWeight;
      });
      badgeScore /= profile.badges.length;
    }

    // Combine scores (70% interest match, 30% badge progress)
    const normalizedMatch = totalWeight > 0 ? matchScore / totalWeight : 0;
    const totalScore = (normalizedMatch * 0.7) + (badgeScore * 0.3);

    scores[career] = {
      totalScore: totalScore * 100, // Convert to percentage
      matchScore: normalizedMatch * 100,
      badgeScore: badgeScore * 100,
      profile: profile
    };
  });

  return scores;
}

// ═══════════════════════════════════════════════════════════════════
// MULTI-LEVEL RECOMMENDATION GENERATORS
// ═══════════════════════════════════════════════════════════════════

// Level 1: CAREER PATH RECOMMENDATIONS
function getCareerLevelRecommendations() {
  const userInterestVector = calculateUserInterestVector();
  const careerScores = calculateCareerMatchScores(userInterestVector);
  const patterns = detectLearningPatterns();

  // Get top 8 career matches
  const sortedCareers = Object.keys(careerScores)
    .map(career => ({
      name: career,
      score: careerScores[career].totalScore,
      matchScore: careerScores[career].matchScore,
      badgeScore: careerScores[career].badgeScore,
      profile: careerScores[career].profile
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  return {
    level: 'career',
    title: '🎯 Career Path Suggestions',
    description: 'Based on your interests and learning patterns across all pathways',
    recommendations: sortedCareers,
    patterns: patterns,
    userVector: userInterestVector,
    nextLevel: 'pathway'
  };
}

// Level 2: PATHWAY RECOMMENDATIONS
function getPathwayLevelRecommendations() {
  const fieldScores = {};

  // Calculate interest and progress for each field
  Object.keys(CURRICULUM_DATA).forEach(field => {
    const completion = calculateFieldCompletion(field);
    const depth = calculateFieldDepth(field);
    const consistency = calculateFieldConsistency(field);

    // Score based on multiple factors
    let score = 0;
    let advice = '';
    let priority = 'low';

    if (completion === 0) {
      // New field recommendation
      const relatedInterest = calculateRelatedInterest(field);
      score = 40 + (relatedInterest * 30);
      advice = `New area based on your interest in related fields`;
      priority = relatedInterest > 0.5 ? 'medium' : 'low';
    } else if (completion < 30) {
      // Early progress - encourage continuation
      score = 75;
      advice = `Great start! Continue building fundamentals in ${field}`;
      priority = 'high';
    } else if (completion < 60) {
      // Good progress - suggest next tier
      const nextTier = getNextRecommendedTier(field);
      score = 85;
      advice = `Ready for ${TIER_NAMES[nextTier]} tier in ${field}`;
      priority = 'high';
    } else if (completion >= 60) {
      // Advanced - suggest mastery or adjacent fields
      score = 90;
      const adjacent = getAdjacentFields(field);
      advice = `Approaching mastery! Consider connecting with: ${adjacent.slice(0, 2).join(', ')}`;
      priority = 'medium';
    }

    // Adjust score based on depth and consistency
    score = score * (0.6 + (depth * 0.2) + (consistency * 0.2));

    fieldScores[field] = {
      completion: completion,
      depth: depth,
      consistency: consistency,
      score: Math.min(100, score),
      advice: advice,
      priority: priority
    };
  });

  // Sort fields by recommendation strength
  const sortedFields = Object.keys(fieldScores)
    .map(field => ({
      name: field,
      icon: FIELD_CONFIG[field]?.icon || '📚',
      ...fieldScores[field]
    }))
    .sort((a, b) => b.score - a.score);

  return {
    level: 'pathway',
    title: '📚 Pathway Focus Recommendations',
    description: 'Which learning pathways match your current interests and progress',
    recommendations: sortedFields.slice(0, 6),
    nextLevel: 'badge'
  };
}

// Level 3: BADGE RECOMMENDATIONS
function getBadgeLevelRecommendations() {
  const recommendations = [];

  // Strategy 1: Continue current learning paths (high priority)
  Object.keys(CURRICULUM_DATA).forEach(field => {
    const currentTier = getCurrentTierInField(field);
    if (currentTier >= 0 && currentTier < 3) {
      const nextTier = currentTier + 1;
      const badges = CURRICULUM_DATA[field][nextTier]?.badges || [];

      badges.forEach((badge, badgeIdx) => {
        const prog = getBadgeProgress(field, nextTier, badgeIdx);
        const key = badgeKey(field, nextTier, badgeIdx);
        const prereqsMet = areBadgeDepsMetFor(key);

        if (prog.earned > 0 && prog.earned < prog.total) {
          // In progress badge
          recommendations.push({
            type: 'continue',
            field: field,
            tier: nextTier,
            badgeIdx: badgeIdx,
            badge: badge,
            progress: prog,
            prereqsMet: true,
            score: 85 + (prog.earned / prog.total * 10),
            reason: `Continue "${badge.name}" (${prog.earned}/${prog.total} sub-badges)`
          });
        } else if (prog.earned === 0 && prereqsMet) {
          // Ready to start badge
          recommendations.push({
            type: 'ready',
            field: field,
            tier: nextTier,
            badgeIdx: badgeIdx,
            badge: badge,
            progress: prog,
            prereqsMet: true,
            score: 80,
            reason: `Ready to start "${badge.name}" - prerequisites complete`
          });
        }
      });
    }
  });

  // Strategy 2: Cross-disciplinary opportunities
  const userFields = Object.keys(CURRICULUM_DATA).filter(field => hasAnyBadges(field));

  userFields.forEach(field => {
    for (let tier = 0; tier < 4; tier++) {
      CURRICULUM_DATA[field][tier].badges.forEach((badge, badgeIdx) => {
        const prog = getBadgeProgress(field, tier, badgeIdx);
        const badgeText = badge.name + ' ' + badge.subBadges.join(' ');

        // Check if badge connects to other user fields
        const connectingFields = userFields.filter(otherField =>
          otherField !== field &&
          getFieldKeywords(otherField).some(keyword =>
            badgeText.toLowerCase().includes(keyword.toLowerCase())
          )
        );

        if (prog.earned === 0 && connectingFields.length > 0) {
          const key = badgeKey(field, tier, badgeIdx);
          const prereqsMet = areBadgeDepsMetFor(key);

          recommendations.push({
            type: 'cross-disciplinary',
            field: field,
            tier: tier,
            badgeIdx: badgeIdx,
            badge: badge,
            progress: prog,
            prereqsMet: prereqsMet,
            connectingFields: connectingFields,
            score: 75 + (connectingFields.length * 5),
            reason: `Connects ${field} with ${connectingFields.join(', ')}`
          });
        }
      });
    }
  });

  // Strategy 3: Prerequisite completion
  Object.keys(badgeDeps).forEach(targetKey => {
    const { field, tier, badge } = parseKey(targetKey);
    const targetProg = getBadgeProgress(field, tier, badge);

    if (targetProg.earned === 0) {
      const prereqs = badgeDeps[targetKey] || [];
      const metCount = prereqs.filter(prereqKey => {
        const p = parseKey(prereqKey);
        return isBadgeComplete(p.field, p.tier, p.badge);
      }).length;

      if (metCount > 0 && metCount === prereqs.length) {
        // All prerequisites met!
        const targetBadge = CURRICULUM_DATA[field][tier].badges[badge];
        recommendations.push({
          type: 'prereq-ready',
          field: field,
          tier: tier,
          badgeIdx: badge,
          badge: targetBadge,
          progress: targetProg,
          prereqsMet: true,
          score: 95,
          reason: `All prerequisites complete for "${targetBadge.name}"`
        });
      } else if (metCount > 0) {
        // Some prerequisites met
        const targetBadge = CURRICULUM_DATA[field][tier].badges[badge];
        recommendations.push({
          type: 'prereq-progress',
          field: field,
          tier: tier,
          badgeIdx: badge,
          badge: targetBadge,
          progress: targetProg,
          prereqsMet: false,
          metCount: metCount,
          totalPrereqs: prereqs.length,
          score: 60 + (metCount / prereqs.length * 20),
          reason: `${metCount}/${prereqs.length} prerequisites complete for "${targetBadge.name}"`
        });
      }
    }
  });

  // Sort and deduplicate
  const uniqueRecs = [];
  const seenKeys = new Set();

  recommendations
    .sort((a, b) => b.score - a.score)
    .forEach(rec => {
      const key = `${rec.field}|${rec.tier}|${rec.badgeIdx}`;
      if (!seenKeys.has(key)) {
        uniqueRecs.push(rec);
        seenKeys.add(key);
      }
    });

  return {
    level: 'badge',
    title: '🛠️ Badge Recommendations',
    description: 'Specific badges to work on next, prioritized by your learning patterns',
    recommendations: uniqueRecs.slice(0, 8)
  };
}

// Level 4: SUB-BADGE RECOMMENDATIONS
function getSubBadgeLevelRecommendations() {
  const recommendations = [];

  // Priority 1: Complete nearly-finished badges
  Object.keys(CURRICULUM_DATA).forEach(field => {
    for (let tier = 0; tier < 4; tier++) {
      CURRICULUM_DATA[field][tier].badges.forEach((badge, badgeIdx) => {
        const prog = getBadgeProgress(field, tier, badgeIdx);

        if (prog.earned > 0 && prog.earned < prog.total) {
          // Find unearned sub-badges
          const earnedSubs = userProgress[field]?.tiers[tier]?.[badgeIdx] || [];

          badge.subBadges.forEach((subBadge, subIdx) => {
            if (!earnedSubs.includes(subIdx)) {
              const remaining = prog.total - prog.earned;

              recommendations.push({
                type: 'complete-badge',
                field: field,
                tier: tier,
                badgeIdx: badgeIdx,
                badge: badge,
                subIdx: subIdx,
                subBadge: subBadge,
                progress: prog,
                remaining: remaining,
                score: 90 - (remaining * 5), // Higher score for fewer remaining
                reason: `Complete "${badge.name}" (${remaining} sub-badge${remaining > 1 ? 's' : ''} left)`,
                badgeContext: `${badge.name} (${prog.earned}/${prog.total})`
              });
            }
          });
        }
      });
    }
  });

  // Priority 2: Start new badges in active fields
  const activeFields = Object.keys(CURRICULUM_DATA).filter(field =>
    hasAnyBadges(field) && calculateFieldCompletion(field) < 70
  );

  activeFields.forEach(field => {
    const currentTier = getCurrentTierInField(field);
    if (currentTier >= 0 && currentTier < 4) {
      const badges = CURRICULUM_DATA[field][currentTier].badges;

      badges.forEach((badge, badgeIdx) => {
        const prog = getBadgeProgress(field, currentTier, badgeIdx);
        const key = badgeKey(field, currentTier, badgeIdx);
        const prereqsMet = areBadgeDepsMetFor(key);

        if (prog.earned === 0 && prereqsMet) {
          // Start first sub-badge
          recommendations.push({
            type: 'start-new',
            field: field,
            tier: currentTier,
            badgeIdx: badgeIdx,
            badge: badge,
            subIdx: 0,
            subBadge: badge.subBadges[0],
            progress: prog,
            prereqsMet: true,
            score: 75,
            reason: `Start "${badge.name}" in your current focus field`,
            badgeContext: `Begin ${TIER_NAMES[currentTier]} in ${field}`
          });
        }
      });
    }
  });

  // Priority 3: Foundation sub-badges for recommended careers
  const careerRecs = getCareerLevelRecommendations();
  careerRecs.recommendations.slice(0, 3).forEach(career => {
    if (career.profile.badges) {
      career.profile.badges.forEach(badgeRef => {
        const badge = CURRICULUM_DATA[badgeRef.field][badgeRef.tier].badges[badgeRef.badge];
        const prog = getBadgeProgress(badgeRef.field, badgeRef.tier, badgeRef.badge);

        if (prog.earned < prog.total) {
          const earnedSubs = userProgress[badgeRef.field]?.tiers[badgeRef.tier]?.[badgeRef.badge] || [];

          // Find first unearned sub-badge
          for (let subIdx = 0; subIdx < badge.subBadges.length; subIdx++) {
            if (!earnedSubs.includes(subIdx)) {
              recommendations.push({
                type: 'career-foundation',
                field: badgeRef.field,
                tier: badgeRef.tier,
                badgeIdx: badgeRef.badge,
                badge: badge,
                subIdx: subIdx,
                subBadge: badge.subBadges[subIdx],
                progress: prog,
                score: 80 + (career.score / 100 * 10),
                reason: `Foundation for ${career.name} career path`,
                badgeContext: `${badge.name} → ${career.name}`,
                career: career.name,
                careerScore: career.score
              });
              break;
            }
          }
        }
      });
    }
  });

  // Sort and return
  return {
    level: 'subBadge',
    title: '🎖️ Sub-Badge Recommendations',
    description: 'Most granular learning steps, prioritized for maximum progress',
    recommendations: recommendations
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
  };
}

// ═══════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function calculateFieldCompletion(field) {
  let totalSubBadges = 0;
  let earnedSubBadges = 0;

  for (let tier = 0; tier < 4; tier++) {
    CURRICULUM_DATA[field][tier].badges.forEach((badge, badgeIdx) => {
      totalSubBadges += badge.subBadges.length;
      earnedSubBadges += getBadgeProgress(field, tier, badgeIdx).earned;
    });
  }

  return totalSubBadges > 0 ? (earnedSubBadges / totalSubBadges) * 100 : 0;
}

function calculateFieldDepth(field) {
  // How deep (which tier) has the user progressed
  const highestTier = getCurrentTierInField(field);
  return highestTier >= 0 ? (highestTier + 1) / 4 : 0; // 0-1 scale
}

function calculateFieldConsistency(field) {
  // How consistently has the user completed tiers
  let consistentTiers = 0;
  let totalTiersWithProgress = 0;

  for (let tier = 0; tier < 4; tier++) {
    const completed = getTierCompleted(field, tier);
    const total = getTierTotalBadges(field, tier);

    if (completed > 0) {
      totalTiersWithProgress++;
      if (completed === total) {
        consistentTiers++;
      }
    }
  }

  return totalTiersWithProgress > 0 ? consistentTiers / totalTiersWithProgress : 0;
}

function calculateRelatedInterest(field) {
  const userVector = calculateUserInterestVector();
  const relatedFields = getAdjacentFields(field);

  let maxInterest = 0;
  relatedFields.forEach(relatedField => {
    if (userVector[relatedField] > maxInterest) {
      maxInterest = userVector[relatedField];
    }
  });

  return maxInterest;
}

function getAdjacentFields(field) {
  // Define field adjacencies based on skill transfer
  const adjacencyMap = {
    'CAD Design': ['Architectural CAD', 'Game Development', 'Robotics'],
    'Electronic CAD': ['Practical Electronics', 'Hardware Programming', 'Robotics'],
    'Web Development': ['App Development', 'Game Development', 'Data Intelligence'],
    'App Development': ['Web Development', 'Game Development', 'AI and Data Science'],
    'Hardware Programming': ['Electronic CAD', 'Practical Electronics', 'Robotics'],
    'Architectural CAD': ['CAD Design', 'Game Development', 'Data Intelligence'],
    'Data Intelligence': ['AI and Data Science', 'Web Development', 'Practical Electronics'],
    'Practical Electronics': ['Electronic CAD', 'Hardware Programming', 'Robotics'],
    'AI and Data Science': ['Data Intelligence', 'Robotics', 'Game Development'],
    'Game Development': ['App Development', 'Web Development', 'CAD Design'],
    'Robotics': ['Practical Electronics', 'Hardware Programming', 'AI and Data Science']
  };

  return adjacencyMap[field] || [];
}

function getNextRecommendedTier(field) {
  const currentTier = getCurrentTierInField(field);
  if (currentTier < 3) {
    // Check if current tier is mostly complete
    const completionRate = getTierCompleted(field, currentTier) / getTierTotalBadges(field, currentTier);
    return completionRate > 0.7 ? currentTier + 1 : currentTier;
  }
  return currentTier;
}

function hasAnyBadges(field) {
  if (!userProgress[field]) return false;
  for (let tier = 0; tier < 4; tier++) {
    const badges = Object.keys(userProgress[field].tiers[tier] || {});
    if (badges.length > 0) return true;
  }
  return false;
}

function calculateTimeframe(badgeLog) {
  // Simple estimate - assume 1 badge per day for calculation
  // In a real system, you'd track actual timestamps
  return badgeLog.length; // days
}

function getFieldKeywords(field) {
  const keywords = {
    'CAD Design': ['cad', 'design', 'model', 'drawing', 'sketch', '3d'],
    'Electronic CAD': ['circuit', 'pcb', 'schematic', 'electronic', 'component'],
    'Web Development': ['web', 'html', 'css', 'javascript', 'api', 'frontend'],
    'App Development': ['app', 'mobile', 'flutter', 'android', 'ios'],
    'Hardware Programming': ['microcontroller', 'arduino', 'stm32', 'embedded'],
    'Architectural CAD': ['architecture', 'building', 'bim', 'construction'],
    'Data Intelligence': ['data', 'analytics', 'statistics', 'visualization'],
    'Practical Electronics': ['electronics', 'soldering', 'breadboard', 'multimeter'],
    'AI and Data Science': ['ai', 'machine learning', 'neural', 'model'],
    'Game Development': ['game', 'sprite', 'animation', 'physics'],
    'Robotics': ['robot', 'sensor', 'motor', 'autonomous']
  };

  return keywords[field] || [field.toLowerCase()];
}

// ═══════════════════════════════════════════════════════════════════
// UNIFIED RECOMMENDATION SYSTEM
// ═══════════════════════════════════════════════════════════════════

class IntelligentRecommendationEngine {
  constructor() {
    this.levels = ['career', 'pathway', 'badge', 'subBadge'];
    this.currentFocus = null;
  }

  getAllRecommendations() {
    return {
      career: getCareerLevelRecommendations(),
      pathway: getPathwayLevelRecommendations(),
      badge: getBadgeLevelRecommendations(),
      subBadge: getSubBadgeLevelRecommendations()
    };
  }

  getPersonalizedInsights() {
    const patterns = detectLearningPatterns();
    const userVector = calculateUserInterestVector();

    const topFields = Object.entries(userVector)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([field, score]) => ({ field, score: Math.round(score * 100) }));

    const emergingInterests = Object.entries(userVector)
      .filter(([field, score]) => score > 0.3 && score < 0.6)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([field, score]) => ({ field, score: Math.round(score * 100) }));

    return {
      patterns: patterns,
      topFields: topFields,
      emergingInterests: emergingInterests,
      learningStyle: this.determineLearningStyle(patterns),
      recommendationSummary: this.generateSummary(patterns, topFields)
    };
  }

  determineLearningStyle(patterns) {
    if (patterns.some(p => p.type === 'Methodical Learner')) return 'Structured';
    if (patterns.some(p => p.type === 'Explorer')) return 'Exploratory';
    if (patterns.some(p => p.type === 'Specialist')) return 'Focused';
    if (patterns.some(p => p.type === 'Integrative Thinker')) return 'Integrative';
    if (patterns.some(p => p.type === 'Accelerated Learner')) return 'Intensive';
    return 'Balanced';
  }

  generateSummary(patterns, topFields) {
    const summaries = [];

    if (patterns.length > 0) {
      const mainPattern = patterns[0];
      summaries.push(`Your learning pattern shows you're a ${mainPattern.type.toLowerCase()}.`);
    }

    if (topFields.length > 0) {
      summaries.push(`You show strongest interest in ${topFields.map(f => f.field).join(', ')}.`);
    }

    return summaries.join(' ');
  }

  setFocus(level, target) {
    this.currentFocus = { level, target };
    return this.getFocusRecommendations();
  }

  getFocusRecommendations() {
    if (!this.currentFocus) return null;

    const { level, target } = this.currentFocus;

    switch (level) {
      case 'career':
        return this.getCareerFocusRecommendations(target);
      case 'pathway':
        return this.getPathwayFocusRecommendations(target);
      default:
        return null;
    }
  }

  getCareerFocusRecommendations(careerName) {
    const career = CAREER_INTEREST_PROFILES[careerName];
    if (!career) return null;

    const recommendations = [];

    // Get badge recommendations for this career
    if (career.badges) {
      career.badges.forEach(badgeRef => {
        const badge = CURRICULUM_DATA[badgeRef.field][badgeRef.tier].badges[badgeRef.badge];
        const prog = getBadgeProgress(badgeRef.field, badgeRef.tier, badgeRef.badge);

        if (prog.earned < prog.total) {
          recommendations.push({
            type: 'career-badge',
            field: badgeRef.field,
            tier: badgeRef.tier,
            badge: badge,
            progress: prog,
            priority: 'high'
          });
        }
      });
    }

    // Get adjacent skills
    const allFields = Object.keys(career.weights);
    const sortedFields = allFields.sort((a, b) => career.weights[b] - career.weights[a]);

    return {
      career: careerName,
      description: career.description,
      keySkills: sortedFields.slice(0, 3),
      badgeRecommendations: recommendations.slice(0, 5),
      learningPath: this.generateCareerLearningPath(careerName)
    };
  }

  generateCareerLearningPath(careerName) {
    const career = CAREER_INTEREST_PROFILES[careerName];
    if (!career) return [];

    const path = [];
    const weights = career.weights;

    // Sort fields by weight
    const sortedFields = Object.keys(weights).sort((a, b) => weights[b] - weights[a]);

    sortedFields.forEach(field => {
      if (weights[field] >= 0.6) {
        path.push({
          field: field,
          priority: 'core',
          recommendation: `Focus on ${field} (${Math.round(weights[field] * 100)}% relevant)`
        });
      } else if (weights[field] >= 0.4) {
        path.push({
          field: field,
          priority: 'supporting',
          recommendation: `Build supporting skills in ${field}`
        });
      }
    });

    return path;
  }

  getPathwayFocusRecommendations(fieldName) {
    const completion = calculateFieldCompletion(fieldName);
    const depth = calculateFieldDepth(fieldName);

    const recommendations = [];

    // Tier-based recommendations
    for (let tier = 0; tier < 4; tier++) {
      const badges = CURRICULUM_DATA[fieldName][tier].badges;
      const completedInTier = getTierCompleted(fieldName, tier);
      const totalInTier = badges.length;

      if (completedInTier < totalInTier) {
        badges.forEach((badge, badgeIdx) => {
          const prog = getBadgeProgress(fieldName, tier, badgeIdx);
          if (prog.earned === 0) {
            const key = badgeKey(fieldName, tier, badgeIdx);
            const prereqsMet = areBadgeDepsMetFor(key);

            recommendations.push({
              tier: tier,
              badge: badge,
              progress: prog,
              prereqsMet: prereqsMet,
              priority: prereqsMet ? 'high' : 'medium'
            });
          }
        });
        break; // Focus on first incomplete tier
      }
    }

    // Cross-disciplinary connections
    const adjacentFields = getAdjacentFields(fieldName);
    const connectingBadges = [];

    adjacentFields.forEach(adjField => {
      for (let tier = 0; tier < 2; tier++) { // Look at lower tiers for connections
        CURRICULUM_DATA[adjField][tier].badges.forEach((badge, badgeIdx) => {
          const badgeText = badge.name + ' ' + badge.subBadges.join(' ');
          if (getFieldKeywords(fieldName).some(keyword =>
            badgeText.toLowerCase().includes(keyword.toLowerCase()))) {
            connectingBadges.push({
              field: adjField,
              tier: tier,
              badge: badge,
              connection: `Connects to ${fieldName} skills`
            });
          }
        });
      }
    });

    return {
      field: fieldName,
      completion: Math.round(completion),
      depth: depth,
      currentTier: getCurrentTierInField(fieldName),
      badgeRecommendations: recommendations.slice(0, 5),
      crossConnections: connectingBadges.slice(0, 3)
    };
  }
}
// Helper to get current tier in a field (should be defined in main file, but adding fallback)
// function getCurrentTierInField(field) {
//   if (typeof window.getCurrentTierInField === 'function') {
//     return window.getCurrentTierInField(field);
//   }

//   // Fallback implementation
//   if (!userProgress[field]) return -1;
//   for (let tier = 3; tier >= 0; tier--) {
//     if (hasAnyBadges(field)) {
//       return Math.max(0, getHighestTierWithProgress(field));
//     }
//   }
//   return -1;
// }

// function getHighestTierWithProgress(field) {
//   for (let tier = 3; tier >= 0; tier--) {
//     const badges = userProgress[field]?.tiers[tier] || {};
//     if (Object.keys(badges).length > 0) return tier;
//   }
//   return -1;
// }

// // Fallback for functions that might not be defined
// function getBadgeProgress(field, tier, badgeIdx) {
//   if (typeof window.getBadgeProgress === 'function') {
//     return window.getBadgeProgress(field, tier, badgeIdx);
//   }

//   // Fallback implementation
//   if (!CURRICULUM_DATA[field] || !CURRICULUM_DATA[field][tier]) {
//     return { earned: 0, total: 0, pct: 0 };
//   }

//   const badge = CURRICULUM_DATA[field][tier].badges[badgeIdx];
//   if (!badge) return { earned: 0, total: 0, pct: 0 };

//   const earned = userProgress[field]?.tiers[tier]?.[badgeIdx]?.length || 0;
//   const total = badge.subBadges.length;

//   return {
//     earned: earned,
//     total: total,
//     pct: total ? Math.round(earned / total * 100) : 0
//   };
// }

// function hasAnyBadges(field) {
//   if (typeof window.hasAnyBadges === 'function') {
//     return window.hasAnyBadges(field);
//   }

//   // Fallback implementation
//   if (!userProgress[field]) return false;
//   for (let tier = 0; tier < 4; tier++) {
//     const badges = Object.keys(userProgress[field].tiers[tier] || {});
//     if (badges.length > 0) return true;
//   }
//   return false;
// }

// ═══════════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════════

// Create global engine instance
window.recommendationEngine = new IntelligentRecommendationEngine();

// Helper function to integrate with existing system
function initializeRecommendationEngine() {
  // This should be called after the main system loads
  console.log('Intelligent Recommendation Engine initialized');

  // Add to existing career paths if needed
  Object.keys(CAREER_INTEREST_PROFILES).forEach(careerName => {
    if (!CAREER_PATHS[careerName] && CAREER_INTEREST_PROFILES[careerName].badges) {
      CAREER_PATHS[careerName] = {
        icon: CAREER_INTEREST_PROFILES[careerName].icon,
        description: CAREER_INTEREST_PROFILES[careerName].description,
        badges: CAREER_INTEREST_PROFILES[careerName].badges
      };
    }
  });

  return window.recommendationEngine;
}

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CAREER_INTEREST_PROFILES,
    initializeRecommendationEngine,
    IntelligentRecommendationEngine,
    getCareerLevelRecommendations,
    getPathwayLevelRecommendations,
    getBadgeLevelRecommendations,
    getSubBadgeLevelRecommendations
  };
}